import { lazy } from 'react';
import { CarTireServiceRepairHero } from 'components/CarTireServiceRepair/CarTireServiceRepairHero';
import { CarTireServiceChassisMaintenanceAbout } from 'components/CarTireServiceRepair/CarTireServiceChassisMaintenanceAbout';
import { CarServiceRepairForm } from 'components/CarServiceRepair/CarServiceRepairForm';

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
  gap: '10px',
  maxWidth: 'inherit',
  paddingRight: 0,
  margin: 0,
  marginTop: '20px',
  justifyContent: 'normal',
};

const CarTireServiceChassisMaintenancePage = () => {
  return (
    <>
      <CarTireServiceRepairHero h1={'footer.tireServiceList.2'} style={style} />
      <CarTireServiceChassisMaintenanceAbout />
      <CarServiceRepairForm />
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
