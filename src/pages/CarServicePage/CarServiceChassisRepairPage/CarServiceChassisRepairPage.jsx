import { lazy } from 'react';
import { CarServiceRepairHero } from 'components/CarServiceRepair/CarServiceRepairHero';
import { CarServiceChassisRepairAbout } from 'components/CarServiceRepair/CarServiceChassisRepairAbout';
import { CarServiceRepairForm } from 'components/CarServiceRepair/CarServiceRepairForm';

const CarServiceRepairPrice = lazy(() =>
  import('components/CarServiceRepair/CarServiceRepairPrice')
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
  gap: '40px',
  marginTop: '40px',
};

const CarServiceChassisRepairPage = () => {
  return (
    <>
      <CarServiceRepairHero h1={'footer.carServiceList.2'} style={style} />
      <CarServiceChassisRepairAbout />
      <CarServiceRepairForm />
      <CarServiceRepairPrice
        h2={'chassisRepair.h2'}
        list={'chassisRepair.serviceList'}
        price={'chassisRepair.priceList'}
      />
      <SectionFeedbacks />
      <SectionCertifications />
      <SectionForm />
      <SectionBlog />
      <SectionContacts />
    </>
  );
};

export default CarServiceChassisRepairPage;
