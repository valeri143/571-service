// import { lazy } from 'react';
import { Hero } from 'components/Hero/Hero';
import { SectionServices } from 'components/SectionServices/SectionServices';
import SectionAbout from 'components/SectionAbout/SectionAbout';
import SectionFeedbacks from 'components/SectionFeedbacks/SectionFeedbacks';
import SectionCertifications from 'components/SectionCertifications/SectionCertifications';
import SectionForm from 'components/SectionForm/SectionForm';
import SectionBlog from 'components/SectionBlog/SectionBlog';
import SectionContacts from 'components/SectionContacts/SectionContacts';

// const SectionAbout = lazy(() => import('components/SectionAbout/SectionAbout'));
// const SectionFeedbacks = lazy(() =>
//   import('components/SectionFeedbacks/SectionFeedbacks')
// );
// const SectionCertifications = lazy(() =>
//   import('components/SectionCertifications/SectionCertifications')
// );
// const SectionForm = lazy(() => import('components/SectionForm/SectionForm'));
// const SectionBlog = lazy(() => import('components/SectionBlog/SectionBlog'));
// const SectionContacts = lazy(() =>
//   import('components//SectionContacts/SectionContacts')
// );

const Home = () => {
  return (
    <>
      <Hero />
      <SectionServices />
      <SectionAbout />
      <SectionFeedbacks />
      <SectionCertifications />
      <SectionForm />
      <SectionBlog />
      <SectionContacts />
    </>
  );
};

export default Home;
