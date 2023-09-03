import { useEffect, useState } from 'react';
import { Hero } from 'components/Hero/Hero';
import { SectionServices } from 'components/SectionServices/SectionServices';
import { heroEnContent, heroRuContent, heroUaContent } from 'components/Hero/';
import {
  servicesEnContent,
  servicesRuContent,
  servicesUaContent,
} from 'components/SectionServices';

const Home = ({ lang }) => {
  const [heroContent, setHeroContent] = useState(null);
  const [servicesContent, setServicesContent] = useState(null);

  useEffect(() => {
    switch (lang) {
      case 'ru':
        setHeroContent(heroRuContent);
        setServicesContent(servicesRuContent);
        break;

      case 'ua':
        setHeroContent(heroUaContent);
        setServicesContent(servicesUaContent);
        break;

      case 'en':
        setHeroContent(heroEnContent);
        setServicesContent(servicesEnContent);
        break;

      default:
        break;
    }
  }, [lang]);
  return (
    <>
      {heroContent && <Hero content={heroContent} />}
      {servicesContent && <SectionServices content={servicesContent} />}
    </>
  );
};

export default Home;
