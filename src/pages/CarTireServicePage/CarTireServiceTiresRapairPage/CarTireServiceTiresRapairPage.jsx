import { lazy } from 'react';
import { CarTireServiceRepairHero } from 'components/CarTireServiceRepair/CarTireServiceRepairHero';
import { CarTireServiceTiresRepairAbout } from 'components/CarTireServiceRepair/CarTireServiceTiresRepairAbout';

const CarTireServiceTiresRepairPrice = lazy(() =>
  import('components/CarTireServiceRepair/CarTireServiceTiresRepairPrice')
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
  margin: 0,
  justifyContent: 'normal',
  gap: '10px',
  paddingRight: '10px',
  maxWidth: 'max-content',
};

const CarTireServiceTiresRapairPage = () => {
  return (
    <>
      <CarTireServiceRepairHero h1={'footer.tireServiceList.1'} style={style} />
      <CarTireServiceTiresRepairAbout />
      <CarTireServiceTiresRepairPrice
        h2={'tireRepair.h2'}
        price={'tireRepair.priceList'}
        list={'tireRepair.serviceList'}
      />
      <SectionFeedbacks />
      <SectionCertifications />
      <SectionForm />
      <SectionBlog />
      <SectionContacts />
    </>
  );
};

export default CarTireServiceTiresRapairPage;
