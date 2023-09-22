import { lazy } from 'react';
import { CarTireServiceRepairHero } from 'components/CarTireServiceRepair/CarTireServiceRepairHero';
import { CarTireServiceChassisMaintenanceAbout } from 'components/CarTireServiceRepair/CarTireServiceChassisMaintenanceAbout';

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
const CarTireServiceChassisMaintenancePage = () => {
  return (
    <>
      <CarTireServiceRepairHero h1={'footer.tireServiceList.2'} style={style} />
      <CarTireServiceChassisMaintenanceAbout />
      <CarTireServiceTiresRepairPrice
        h2={'chassisMaintenance.h2'}
        price={'chassisMaintenance.priceList'}
        list={'chassisMaintenance.serviceList'}
      />
      <SectionFeedbacks />
      <SectionCertifications />
      <SectionForm />
      <SectionBlog />
      <SectionContacts />
    </>
  );
};

export default CarTireServiceChassisMaintenancePage;
