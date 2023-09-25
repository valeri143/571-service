import styled from 'styled-components';

export const StyledH1 = styled.h1`
  font-size: 30px;
  font-weight: 500;
  line-height: 1.2;
  text-transform: uppercase;
  margin-bottom: 28px;
  @media screen and (min-width: 1512px) {
    font-size: 40px;
    font-weight: 700;
  }
`;
export const StyledFlexContactsDesktopDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    height: 480px;
  }
`;
export const StyledContactsMarginDiv = styled.div`
  order: -1;
  margin-bottom: 80px;
`;
export const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 400px;
`;

export const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

export const StyledSvgDiv = styled.div`
  width: 40px;
  height: 40px;
  background: linear-gradient(95deg, #fdc70d 0%, #fdab0d 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledLink = styled.a`
  font-size: 16px;
  line-height: 1.5;
  position: relative;
  z-index: 3;
  @media screen and (min-width: 1512px) {
    font-size: 18px;
  }
`;

export const StyledLinkDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
export const StyledP = styled.p`
  font-size: 16px;
  line-height: 1.5;
  position: relative;
  z-index: 3;
  @media screen and (min-width: 1512px) {
    font-size: 18px;
  }
`;
export const StyledSpan = styled.span`
  font-size: 16px;
  font-weight: 700;
  line-height: 1.5;
  @media screen and (min-width: 1512px) {
    font-size: 18px;
  }
`;

export const StyledLightSpan = styled.span`
  font-size: 12px;
  font-weight: 300;
  line-height: 1.5;
  margin-right: 2px;
`;

export const StyledBgSvg = styled.svg`
  position: absolute;
  top: 285px;
  right: 20px;
  @media screen and (min-width: 768px) {
    left: 150px;
  }
  @media screen and (min-width: 1512px) {
    width: 355px;
    height: 262px;
    top: 305px;
    left: 378px;
  }
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
    width: 366px;
    margin-right: 200px;
    margin-left: auto;
    margin-right: auto;
  }
`;
