import styled from 'styled-components';
import bg1x from '../../images/mobile/backgrounds/car-tire-service-background@1x-min.jpg';
import bg2x from '../../images/mobile/backgrounds/car-tire-service-background@2x-min.jpg';
import bg1xD from '../../images/desktop/backgrounds/car-tire-bg@2x-min.jpg';
import bg2xD from '../../images/desktop/backgrounds/car-tire-bg@2x-min.jpg';

export const StyledBackGroundImage = styled.div`
  background-image: url(${bg1x});
  background-repeat: no-repeat;
  background-size: cover;
  height: 909px;
  position: relative;
  top: -60px;
  left: 0;
  right: 0;
  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${bg2x});
  }
  @media screen and (min-width: 768px) {
    background-image: url(${bg1xD});
    height: 872px;
    position: relative;
    top: -80px;
    left: 0;
    right: 0;
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${bg2xD});
    }
  }
`;
