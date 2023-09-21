import { lazy } from 'react';
import { CarWashServiceHero } from 'components/CarWashServiceHero/CarWashServiceHero';

const CarWashServiceAbout = lazy(() =>
  import('components/CarWashServiceAbout/CarWashServiceAbout')
);
const SectionFeedbacks = lazy(() =>
  import('components/SectionFeedbacks/SectionFeedbacks')
);
const SectionCertifications = lazy(() =>
  import('components/SectionCertifications/SectionCertifications')
);
const SectionForm = lazy(() => import('components/SectionForm/SectionForm'));
const SectionBlog = lazy(() => import('components/SectionBlog/SectionBlog'));

const CarWashServicePage = () => {
  return (
    <>
      <CarWashServiceHero />
      <CarWashServiceAbout />
      <SectionFeedbacks />
      <SectionCertifications />
      <SectionForm />
      <SectionBlog />
    </>
  );
};
export default CarWashServicePage;
