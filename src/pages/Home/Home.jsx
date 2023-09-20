import { useEffect, useState } from 'react';
import { Hero } from 'components/Hero/Hero';
import { SectionServices } from 'components/SectionServices/SectionServices';
import { SectionAbout } from 'components/SectionAbout/SectionAbout';
import { SectionFeedbacks } from 'components/SectionFeedbacks/SectionFeedbacks';
import { SectionCertifications } from 'components/SectionCertifications/SectionCertifications';
import { SectionForm } from 'components/SectionForm/SectionForm';
import { SectionBlog } from 'components/SectionBlog/SectionBlog';
import { heroRuContent, heroUaContent } from 'components/Hero/';
import {
  servicesRuContent,
  servicesUaContent,
} from 'components/SectionServices';
import { aboutRuContent, aboutUaContent } from 'components/SectionAbout';
import {
  certificationsRuContent,
  certificationsUaContent,
} from 'components/SectionCertifications';
import {
  feedbacksRuContent,
  feedbacksUaContent,
} from 'components/SectionFeedbacks';
import { formRuContent, formUaContent } from 'components/SectionForm';
import { blogRuContent, blogUaContent } from 'components/SectionBlog';

const Home = ({ lang }) => {
  const [heroContent, setHeroContent] = useState(null);
  const [servicesContent, setServicesContent] = useState(null);
  const [aboutContent, setAboutContent] = useState(null);
  const [feedbacksContent, setFeedbacksContent] = useState(null);
  const [certificationsContent, setCertificationsContent] = useState(null);
  const [formContent, setFormContent] = useState(null);
  const [blogContent, setBlogContent] = useState(null);

  useEffect(() => {
    switch (lang) {
      case 'ru':
        setHeroContent(heroRuContent);
        setServicesContent(servicesRuContent);
        setAboutContent(aboutRuContent);
        setFeedbacksContent(feedbacksRuContent);
        setCertificationsContent(certificationsRuContent);
        setFormContent(formRuContent);
        setBlogContent(blogRuContent);
        break;

      case 'ua':
        setHeroContent(heroUaContent);
        setServicesContent(servicesUaContent);
        setAboutContent(aboutUaContent);
        setFeedbacksContent(feedbacksUaContent);
        setCertificationsContent(certificationsUaContent);
        setFormContent(formUaContent);
        setBlogContent(blogUaContent);
        break;

      default:
        break;
    }
  }, [lang]);
  return (
    <>
      {heroContent && <Hero content={heroContent} />}
      {servicesContent && <SectionServices content={servicesContent} />}
      {aboutContent && <SectionAbout content={aboutContent} />}
      {feedbacksContent && <SectionFeedbacks content={feedbacksContent} />}
      {certificationsContent && (
        <SectionCertifications content={certificationsContent} />
      )}
      {formContent && <SectionForm content={formContent} />}
      {blogContent && <SectionBlog content={blogContent} />}
    </>
  );
};

export default Home;
