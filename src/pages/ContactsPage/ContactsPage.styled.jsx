import styled from 'styled-components';

export const StyledH1 = styled.h1`
  font-size: 30px;
  font-weight: 500;
  line-height: 1.2;
  text-transform: uppercase;
  margin-bottom: 28px;
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
  z-index: 5;
`;

export const StyledLinkDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
export const StyledP = styled.p`
  font-size: 16px;
  line-height: 1.5;
  position: relative;
  z-index: 5;
`;
export const StyledSpan = styled.span`
  font-size: 16px;
  font-weight: 700;
  line-height: 1.5;
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
`;
