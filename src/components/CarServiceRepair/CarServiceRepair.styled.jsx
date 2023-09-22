import styled from 'styled-components';
import bg1x from '../../images/mobile/backgrounds/engine-repair-background@1x-min.jpg';
import bg2x from '../../images/mobile/backgrounds/engine-repair-background@2x-min.jpg';

export const StyledBackGroundImage = styled.div`
  background-image: url(${bg1x});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  position: relative;
  top: -60px;
  left: 0;
  right: 0;
  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${bg2x});
  }
`;

export const StyledContainer = styled.div`
  padding: 0px 15px 80px 15px;
  margin: 0 auto;
  box-sizing: border-box;
  outline: solid tomato;
  position: relative;
  text-align: left;
  @media screen and (min-width: 390px) {
    width: 390px;
  }
  @media screen and (min-width: 768px) {
    width: 768px;
  }
  @media screen and (min-width: 1512px) {
    width: 1512px;
    padding: 80px 156px 150px 156px;
  }
`;

export const StyledP = styled.p`
  font-size: 16px;
  line-height: 1.5;
  width: 355px;
  margin-bottom: 10px;
`;

export const StyledSpan = styled.span`
  font-weight: 700;
`;

export const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
  margin-top: 23px;
`;

export const StyledDiv = styled.div`
  display: flex;
  gap: 10px;
`;

export const StyledSvg = styled.svg`
  margin-top: -3px;
`;

export const StyledFormikDiv = styled.div`
  margin: 0 auto;
  padding-top: 50px;
  padding-bottom: 50px;
  max-width: 360px;
  max-height: 470px;
  border-radius: 8px;
  background: var(--primary-color);
  @media screen and (min-width: 768px) {
    max-height: 390px;
  }
`;
export const StyledFormikContactsDiv = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;
  max-width: 360px;
  max-height: 470px;
  border-radius: 8px;
  background: var(--primary-color);
  position: absolute;
  z-index: 6;
  bottom: -80px;
  padding-left: 15px;
  padding-right: 15px;
  @media screen and (min-width: 768px) {
    max-height: 390px;
    position: static;
  }
`;

export const StyledH2 = styled.h2`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.2;
  margin-bottom: 10px;
`;

export const StyledPriceSpan = styled.span`
  color: #222;
  font-size: 16px;
  font-weight: 500;
  line-height: 30px;
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  @media screen and (min-width: 768px) {
    width: 768px;
    margin: 0 auto;
  }
`;

export const ServiceHeader = styled.th`
  padding-left: 15px;
  padding-bottom: 10px;
  color: #222;
  line-height: 1.7;
  text-align: left;
  font-weight: 400;
`;

export const PriceHeader = styled.th`
  padding-right: 15px;
  padding-bottom: 10px;
  color: #222;
  line-height: 1.7;
  text-align: right;
  font-weight: 400;
`;

export const StyledTr = styled.tr`
  background: var(--light-color);
`;
export const ServiceCell = styled.td`
  padding-left: 15px;
  padding-top: 17px;
  width: 64%;
  padding-bottom: 17px;
  text-align: left;
  color: #222;
  font-size: 16px;
  font-weight: 300;
  line-height: 1.1;
`;

export const PriceCell = styled.td`
  padding-right: 10px;
  padding-top: 17px;
  padding-bottom: 17px;
  text-align: right;
  color: #222;
  font-size: 16px;
  font-weight: 300;
  line-height: 1.1;
`;

export const StyledFlexDesktopDiv = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const StyledMarginDiv = styled.div`
  margin-bottom: 80px;
`;
