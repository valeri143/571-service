import { lazy } from 'react';
import styled from 'styled-components';
import bg1x from 'images/desktop/backgrounds/services/engine-bg@1x-min.jpg';
import bg2x from 'images/desktop/backgrounds/services/engine-bg@2x-min.jpg';
import { CarServiceRepairHero } from 'components/CarServiceRepair/CarServiceRepairHero';
import { CarServiceEngineRepairAbout } from 'components/CarServiceRepair/CarServiceEngineRepairAbout';

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

const StyledBackGroundImage = styled.div`
  background-image: url(${bg1x});
  background-repeat: no-repeat;
  background-size: cover;
  height: 470px;
  position: relative;
  top: -60px;
  left: 0;
  right: 0;
  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${bg2x});
  }
  @media screen and (min-width: 1512px) {
    top: -80px;
    left: 0;
    right: 0;
  }
`;

const CarServiceEngineRepairPage = () => {
  return (
    <>
      <CarServiceRepairHero
        h1={'footer.carServiceList.0'}
        p={'engineRepair.p'}
        Bg={StyledBackGroundImage}
      />
      <CarServiceEngineRepairAbout />
      <SectionFeedbacks />
      <SectionCertifications />
      <SectionForm />
      <SectionBlog />
      <SectionContacts />
    </>
  );
};

export default CarServiceEngineRepairPage;
