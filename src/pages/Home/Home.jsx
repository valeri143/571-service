import { useEffect, useState } from 'react';
import { Hero } from 'components/Hero/Hero';
import { SectionServices } from 'components/SectionServices/SectionServices';
import { SectionCertifications } from 'components/SectionCertifications/SectionCertifications';
import { heroEnContent, heroRuContent, heroUaContent } from 'components/Hero/';
import {
  servicesEnContent,
  servicesRuContent,
  servicesUaContent,
} from 'components/SectionServices';
import {
  certificationsEnContent,
  certificationsRuContent,
  certificationsUaContent,
} from 'components/SectionCertifications';

const Home = ({ lang }) => {
  const [heroContent, setHeroContent] = useState(null);
  const [servicesContent, setServicesContent] = useState(null);
  const [certificationsContent, setCertificationsContent] = useState(null);

  useEffect(() => {
    switch (lang) {
      case 'ru':
        setHeroContent(heroRuContent);
        setServicesContent(servicesRuContent);
        setCertificationsContent(certificationsRuContent);
        break;

      case 'ua':
        setHeroContent(heroUaContent);
        setServicesContent(servicesUaContent);
        setCertificationsContent(certificationsUaContent);
        break;

      case 'en':
        setHeroContent(heroEnContent);
        setServicesContent(servicesEnContent);
        setCertificationsContent(certificationsEnContent);
        break;

      default:
        break;
    }
  }, [lang]);
  return (
    <>
      {heroContent && <Hero content={heroContent} />}
      {servicesContent && <SectionServices content={servicesContent} />}
      {certificationsContent && (
        <SectionCertifications content={certificationsContent} />
      )}
    </>
  );
};

export default Home;
