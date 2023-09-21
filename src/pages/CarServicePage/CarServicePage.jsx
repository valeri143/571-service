import { lazy } from 'react';
import { CarServiceHero } from 'components/CarServiceHero/CarServiceHero';

const CarServiceAbout = lazy(() =>
  import('components/CarServiceAbout/CarServiceAbout')
);
const SectionFeedbacks = lazy(() =>
  import('components/SectionFeedbacks/SectionFeedbacks')
);
const SectionCertifications = lazy(() =>
  import('components/SectionCertifications/SectionCertifications')
);
const SectionForm = lazy(() => import('components/SectionForm/SectionForm'));
const SectionBlog = lazy(() => import('components/SectionBlog/SectionBlog'));
const CarServicePage = () => {
  return (
    <>
      <CarServiceHero />
      <CarServiceAbout />
      <SectionFeedbacks />
      <SectionCertifications />
      <SectionForm />
      <SectionBlog />
    </>
  );
};

export default CarServicePage;
