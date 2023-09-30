import { lazy } from 'react';
import { CarServiceWheelAlignmentRepairHero } from 'components/CarServiceWheelAlignmentRepair/CarServiceWheelAlignmentRepairHero';
import { CarServiceWheelAlignmentRepairAbout } from 'components/CarServiceWheelAlignmentRepair/CarServiceWheelAlignmentRepairAbout';

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
const CarServiceWheelAlignmentRepairPage = () => {
  return (
    <>
      <CarServiceWheelAlignmentRepairHero />
      <CarServiceWheelAlignmentRepairAbout />
      <SectionFeedbacks />
      <SectionCertifications />
      <SectionForm />
      <SectionBlog />
      <SectionContacts />
    </>
  );
};

export default CarServiceWheelAlignmentRepairPage;
