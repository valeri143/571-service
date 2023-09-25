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
    padding: 10px 0px 80px 156px;
  }
`;

export const StyledPaddingContainer = styled.div`
  padding: 0px 15px 80px 15px;
  margin: 0 auto;
  box-sizing: border-box;
  position: relative;
  text-align: left;
  @media screen and (min-width: 390px) {
    width: 390px;
  }
  @media screen and (min-width: 768px) {
    width: 768px;
    padding-left: 0;
    padding-right: 0;
  }
  @media screen and (min-width: 1512px) {
    width: 1512px;
    padding: 10px 0px 80px 156px;
  }
`;

export const StyledPaddingContainerMore = styled.div`
  padding: 0px 15px 80px 15px;
  margin: 0 auto;
  box-sizing: border-box;
  position: relative;
  text-align: left;
  @media screen and (min-width: 390px) {
    width: 390px;
  }
  @media screen and (min-width: 768px) {
    width: 768px;
    padding-left: 0;
    padding-right: 0;
  }
  @media screen and (min-width: 1512px) {
    width: 1512px;
    padding: 10px 0px 80px 60px;
  }
`;

export const StyledH1 = styled.h1`
  width: 300px;
  color: var(--light-color);
  font-size: 30px;
  font-weight: 700;
  text-transform: uppercase;
  line-height: 1.2;
  margin-bottom: 10px;
  margin-top: 60px;
  @media screen and (min-width: 1512px) {
    max-width: 643px;
    font-size: 40px;
  }
`;

export const StyledP = styled.p`
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 10px;
  @media screen and (min-width: 390px) {
    width: 355px;
  }
  @media screen and (min-width: 1512px) {
    max-width: 794px;
    font-size: 18px;
    width: auto;
  }
`;

export const StyledPInUl = styled.p`
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 10px;
  @media screen and (min-width: 390px) {
    width: 333px;
  }
  @media screen and (min-width: 1512px) {
    font-size: 18px;
  }
`;

export const StyledDivTable = styled.div`
  @media screen and (min-width: 768px) {
    margin-top: -120px;
  }
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
  @media screen and (min-width: 1512px) {
    flex-wrap: wrap;
    flex-direction: row;
    flex-basis: calc(50% - 10px);
    justify-content: flex-start;
    align-items: center;
  }
`;

export const StyledGridUl = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
  margin-top: 23px;
  @media screen and (min-width: 1512px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: max-content;
    align-items: center;
  }
`;

export const StyledDiv = styled.div`
  display: flex;
  gap: 10px;
`;

export const StyledSvg = styled.svg`
  margin-top: -3px;
`;
export const StyledH3 = styled.h3`
  width: 248px;
  color: var(--light-color);
  text-align: center;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.2;
  text-transform: uppercase;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 32px;
  @media screen and (min-width: 1512px) {
    font-size: 38px;
    width: 330px;
  }
`;

export const StyledGradientDiv = styled.div`
  display: none;
  @media screen and (min-width: 1512px) {
    display: block;
    width: 550px;
    height: 316px;
    background: rgb(255, 255, 255);
    background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0) 30%
    );
    position: absolute;
    bottom: 0;
    right: 0;
  }
`;

export const StyledFormikDiv = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;
  max-width: 360px;
  max-height: 470px;
  border-radius: 8px;
  background: var(--primary-color);
  @media screen and (min-width: 768px) {
    max-height: 390px;
  }
  @media screen and (min-width: 1512px) {
    max-width: none;
    width: 500px;
    max-height: 430px;
    position: sticky;
    top: 0;
    z-index: 666;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
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
  z-index: 2;
  bottom: -80px;
  padding-left: 15px;
  padding-right: 15px;
  @media screen and (min-width: 768px) {
    max-height: 390px;
    position: static;
  }
  @media screen and (min-width: 1512px) {
    min-width: 590px;
    height: 453px;
  }
`;

export const StyledH2 = styled.h2`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.2;
  margin-bottom: 10px;
  margin-top: 80px;
  @media screen and (min-width: 768px) {
    margin-left: 16px;
  }
`;

export const StyledPriceSpan = styled.span`
  color: #222;
  font-size: 16px;
  font-weight: 500;
  line-height: 30px;
  @media screen and (min-width: 768px) {
    padding-top: 17px;
    padding-bottom: 17px;
  }
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  @media screen and (min-width: 768px) {
    width: 768px;
  }
  @media screen and (min-width: 1512px) {
    margin: 0;
    margin-top: 40px;
  }
`;

export const ServiceHeader = styled.th`
  padding-left: 15px;
  padding-bottom: 10px;
  color: #222;
  line-height: 1.7;
  text-align: left;
  font-weight: 400;
  @media screen and (min-width: 1512px) {
    font-size: 24px;
  }
`;

export const PriceHeader = styled.th`
  padding-right: 15px;
  padding-bottom: 10px;
  color: #222;
  line-height: 1.7;
  text-align: right;
  font-weight: 400;
  @media screen and (min-width: 1512px) {
    font-size: 24px;
  }
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
  @media screen and (min-width: 1512px) {
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px;
  }
`;

export const StyledMarginDiv = styled.div`
  order: -1;
  margin-bottom: 80px;
`;
