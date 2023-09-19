import { useEffect, useState } from 'react';
import { Hero } from 'components/Hero/Hero';
import { SectionServices } from 'components/SectionServices/SectionServices';
import { SectionCertifications } from 'components/SectionCertifications/SectionCertifications';
import { heroRuContent, heroUaContent } from 'components/Hero/';
import {
  servicesRuContent,
  servicesUaContent,
} from 'components/SectionServices';
import {
  certificationsRuContent,
  certificationsUaContent,
} from 'components/SectionCertifications';
import { Form } from 'components/Form/Form';

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

      default:
        break;
    }
  }, [lang]);
  return (
    <>
      {heroContent && <Hero content={heroContent} />}
      {servicesContent && <SectionServices content={servicesContent} />}
      {/* {certificationsContent && (
        <SectionCertifications content={certificationsContent} />
      )}
      {certificationsContent && <Form />} */}
    </>
  );
};

export default Home;
