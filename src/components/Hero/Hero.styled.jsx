import styled from '@emotion/styled';
import bg1x from '../../images/desktop/backgrounds/bg@1x-min.jpg';
import bg2x from '../../images/desktop/backgrounds/bg@2x-min.jpg';

export const StyledContainer = styled.div`
  margin: 0 auto;
  box-sizing: border-box;
  outline: solid tomato;
  max-width: 1920px;
  padding: 217px 185px 216px 185px;
  text-align: left;
`;

export const StyledBackGroundImage = styled.div`
  background-image: linear-gradient(
      rgba(17, 19, 39, 0.6),
      rgba(17, 19, 39, 0.6)
    ),
    url(${bg1x});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  height: auto;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${bg2x});
  }
`;

export const StyledH1 = styled.h1`
  width: 670px;
  color: var(--background-color);
  font-size: 52px;
  line-height: 1.2;
  margin-bottom: 9px;
`;

export const StyledP = styled.p`
  width: 551px;
  color: var(--background-color);
  line-height: 2;
  margin-bottom: 29px;
`;

export const StyledButton = styled.button`
  font-size: 16px;
  width: 280px;
  height: 64px;
  border-radius: 666px;
  background: var(--button-color);
  box-shadow: 0px 21px 20px -17px rgba(253, 199, 5, 0.7);
`;
