import { lazy } from 'react';
import { CarTireServiceRepairHero } from 'components/CarTireServiceRepair/CarTireServiceRepairHero';
import { CarTireServiceMountingDismantlingOfTiresAbout } from 'components/CarTireServiceRepair/CarTireServiceMountingDismantlingOfTiresAbout';

const CarTireServiceRepairPrice = lazy(() =>
  import('components/CarTireServiceRepair/CarTireServiceRepairPrice')
);
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

const style = {
  gap: '5px',
  maxWidth: 'max-content',
  paddingRight: '5px',
  margin: 0,
  marginTop: '20px',
  justifyContent: 'normal',
};

const CarTireServiceMountingDismantlingOfTiresPage = () => {
  return (
    <>
      <CarTireServiceRepairHero h1={'footer.tireServiceList.0'} style={style} />
      <CarTireServiceMountingDismantlingOfTiresAbout />
      <CarTireServiceRepairPrice />
      <SectionFeedbacks />
      <SectionCertifications />
      <SectionForm />
      <SectionBlog />
      <SectionContacts />
    </>
  );
};

export default CarTireServiceMountingDismantlingOfTiresPage;
