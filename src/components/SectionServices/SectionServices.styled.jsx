import styled from 'styled-components';

export const StyledContainer = styled.div`
  padding: 80px 15px 80px 15px;
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
    padding: 100px 156px 150px 156px;
  }
`;

export const StyledBgSvg = styled.svg`
  position: absolute;
  top: 24px;
  right: 7px;
  @media screen and (min-width: 1512px) {
    width: 574px;
    height: 423px;
    top: 90px;
  }
`;

export const StyledDiv = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
  @media screen and (min-width: 1512px) {
    justify-content: end;
    flex-direction: row-reverse;
    align-items: center;
    position: relative;
    z-index: 2;
  }
`;

export const StyledCircleDiv = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: linear-gradient(95deg, #fdc70d 0%, #fdab0d 100%);
  @media screen and (min-width: 1512px) {
    width: 28px;
    height: 28px;
  }
`;

export const StyledH2 = styled.h2`
  text-align: right;
  font-size: 12px;
  line-height: 1.5;
  opacity: 0.5;
`;

export const StyledH3 = styled.h3`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.2;
  text-transform: uppercase;
  position: relative;
  z-index: 2;
  margin-bottom: 20px;
  @media screen and (min-width: 1512px) {
    font-size: 38px;
    max-width: 788px;
  }
`;

export const StyledSpan = styled.span`
  color: var(--accent-color);
  font-size: 24px;
  font-weight: 500;
  line-height: 1.2;
  text-transform: uppercase;
  @media screen and (min-width: 1512px) {
    font-size: 38px;
  }
`;

export const StyledP = styled.p`
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 30px;
  @media screen and (min-width: 1512px) {
    font-size: 18px;
    margin-bottom: 50px;
    max-width: 718px;
  }
`;

export const StyledSvg = styled.svg`
  position: absolute;
  top: 20px;
  right: 20px;
  @media screen and (min-width: 1512px) {
    transform-origin: top right;
    transition: scale 250ms var(--animation-cubic);
    &:hover,
    &:focus {
      scale: 1.35;
    }
  }
`;

export const StyledH4 = styled.h4`
  color: var(--light-color);
  font-size: 20px;
  font-weight: 500;
  line-height: 1.2;
  margin-left: 16px;
  @media screen and (min-width: 1512px) {
    font-size: 24px;
  }
`;
export const StyledH402 = styled.h4`
  font-size: 20px;
  font-weight: 500;
  line-height: 1.2;
  margin-left: 16px;
  @media screen and (min-width: 1512px) {
    font-size: 24px;
  }
`;

export const StyledServicesDiv = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 360px;
  max-height: 374px;
  border-radius: 8px;
  background: #242424;
  box-shadow: 10px 10px 15px 0px rgba(71, 71, 71, 0.2);
  padding-bottom: 16px;
  cursor: pointer;
  @media screen and (min-width: 1512px) {
    min-width: 387px;
    min-height: 402px;
    transition: box-shadow 250ms var(--animation-cubic);
    &:hover,
    &:focus {
      box-shadow: 20px 20px 30px 0px rgba(71, 71, 71, 0.4);
    }
  }
`;

export const StyledServicesDiv02 = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 360px;
  max-height: 374px;
  border-radius: 8px;
  background: radial-gradient(50% 50% at 50% 50%, #efd98f 0%, #ffc600 100%);
  box-shadow: 10px 10px 15px 0px rgba(71, 71, 71, 0.2);
  padding-bottom: 26px;
  cursor: pointer;
  @media screen and (min-width: 1512px) {
    min-width: 387px;
    min-height: 390px;
    justify-content: end;
    transition: box-shadow 250ms var(--animation-cubic);
    &:hover,
    &:focus {
      box-shadow: 10px 10px 30px 0px rgba(71, 71, 71, 0.4);
    }
  }
`;

export const StyledServicesUl = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 15px;
  }
  @media screen and (min-width: 1512px) {
    gap: 20px;
    flex-wrap: nowrap;
    justify-content: space-between;
  }
`;

export const StyledNavLink = styled.p`
  color: var(--light-color);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  display: inline-flex;
  padding: 5px 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 500px;
  background: rgba(255, 255, 255, 0.1);
  cursor: pointer;
`;

export const StyledNavLink02 = styled.p`
  color: var(--primary-color);
  display: inline-flex;
  padding: 5px 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 500px;
  background: rgba(255, 255, 255, 0.5);
  font-size: 14px;
  line-height: 1.5;
  font-weight: 400;
  cursor: pointer;
`;

export const StyledUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  row-gap: 10px;
  margin-left: 16px;
`;
