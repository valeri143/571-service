import { lazy, useRef } from 'react';
import { Hero } from 'components/Hero/Hero';
import { SectionServices } from 'components/SectionServices/SectionServices';

const SectionAbout = lazy(() => import('components/SectionAbout/SectionAbout'));
const SectionFeedbacks = lazy(() =>
  import('components/SectionFeedbacks/SectionFeedbacks')
);
const SectionCertifications = lazy(() =>
  import('components/SectionCertifications/SectionCertifications')
);
const SectionForm = lazy(() => import('components/SectionForm/SectionForm'));
const SectionBlog = lazy(() => import('components/SectionBlog/SectionBlog'));
const SectionContacts = lazy(() =>
  import('components//SectionContacts/SectionContacts')
);

const Home = () => {
  const formRef = useRef(null);

  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'nearest',
      });
    }
  };

  return (
    <>
      <Hero onClick={scrollToForm} />
      <SectionServices />
      <SectionAbout />
      <SectionFeedbacks />
      <SectionCertifications />
      <SectionForm rref={formRef} />
      <SectionBlog />
      <SectionContacts />
    </>
  );
};

export default Home;
