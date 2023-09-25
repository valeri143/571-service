import { lazy } from 'react';
import styled from 'styled-components';
import bg1x from 'images/desktop/backgrounds/services/headlight-bg@1x-min.jpg';
import bg2x from 'images/desktop/backgrounds/services/headlight-bg@2x-min.jpg';
import { CarWashServiceRepairHero } from 'components/CarWashServiceRepair/CarWashServiceRepairHero';
import { CarWashServiceHeadlightPolishingAbout } from 'components/CarWashServiceRepair/CarWashServiceHeadlightPolishingAbout';

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
  width: 100vw;
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
const style = {
  gap: '15px',
  maxWidth: 'max-content',
  paddingRight: '15px',
  margin: 0,
  justifyContent: 'normal',
};

const CarWashServiceHeadlightPolishingPage = () => {
  return (
    <>
      <CarWashServiceRepairHero
        h1={'services.servicesUlText.0'}
        p={'headlightPolishing.p'}
        buttonText={'carWash.buttonText'}
        style={style}
        Bg={StyledBackGroundImage}
      />
      <CarWashServiceHeadlightPolishingAbout />
      <SectionFeedbacks />
      <SectionCertifications />
      <SectionForm />
      <SectionBlog />
      <SectionContacts />
    </>
  );
};

export default CarWashServiceHeadlightPolishingPage;
