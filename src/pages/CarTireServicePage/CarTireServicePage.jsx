import { lazy } from 'react';
import { CarTireServiceHero } from 'components/CarTireServiceHero/CarTireServiceHero';

const CarTireServiceAbout = lazy(() =>
  import('components/CarTireServiceAbout/CarTireServiceAbout')
);
const SectionFeedbacks = lazy(() =>
  import('components/SectionFeedbacks/SectionFeedbacks')
);
const SectionCertifications = lazy(() =>
  import('components/SectionCertifications/SectionCertifications')
);
const SectionForm = lazy(() => import('components/SectionForm/SectionForm'));
const SectionBlog = lazy(() => import('components/SectionBlog/SectionBlog'));

const CarTireServicePage = () => {
  return (
    <>
      <CarTireServiceHero />
      <CarTireServiceAbout />
      <SectionFeedbacks />
      <SectionCertifications />
      <SectionForm />
      <SectionBlog />
    </>
  );
};
export default CarTireServicePage;
