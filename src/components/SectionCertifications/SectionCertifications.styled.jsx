import styled from '@emotion/styled';
import bg1x from '../../images/desktop/backgrounds/bg@1x-min.jpg';
import bg2x from '../../images/desktop/backgrounds/bg@2x-min.jpg';

export const StyledBackGroundImage = styled.div`
  background-image: linear-gradient(
      rgba(17, 19, 39, 0.6),
      rgba(17, 19, 39, 0.6)
    ),
    url(${bg1x});
  background-repeat: no-repeat;
  background-size: cover;
  width: auto;
  height: 879px;
  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${bg2x});
  }
`;

export const StyledContainer = styled.div`
  margin: 0 auto;
  box-sizing: border-box;
  outline: solid tomato;
  max-width: 1920px;
  padding: 156px 185px 135px 185px;
  text-align: left;
  position: relative;
`;

export const StyledH2 = styled.h2`
  color: var(--background-color);
  font-family: Gilroy Bold;
  font-size: 40px;
  line-height: 1.3;
  margin-bottom: 5px;
`;

export const StyledP = styled.p`
  width: 938px;
  color: var(--background-color);
  line-height: 2;
  margin-bottom: 45px;
`;

export const StyledImgBox = styled.div`
  padding: 10px;
  border-radius: 8px;
  background: var(--background-color);
  box-shadow: 0px 0px 60px 0px rgba(129, 129, 129, 0.15);
`;

export const StyledDiv = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const StyledButton = styled.button`
  background: none;
  border: none;
`;
