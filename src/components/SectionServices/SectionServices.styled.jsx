import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledContainer = styled.div`
  padding: 80px 15px 80px 15px;
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
    padding: 100px 156px 150px 156px;
  }
`;

export const StyledBgSvg = styled.svg`
  position: absolute;
  top: 24px;
  right: 7px;
`;

export const StyledDiv = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
`;

export const StyledCircleDiv = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: linear-gradient(95deg, #fdc70d 0%, #fdab0d 100%);
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
`;

export const StyledSpan = styled.span`
  color: var(--accent-color);
  font-size: 24px;
  font-weight: 500;
  line-height: 1.2;
  text-transform: uppercase;
`;

export const StyledP = styled.p`
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 30px;
`;

export const StyledSvg = styled.svg`
  position: absolute;
  top: 20px;
  right: 20px;
`;

export const StyledH4 = styled.h4`
  color: var(--light-color);
  font-size: 20px;
  font-weight: 500;
  line-height: 1.2;
  margin-left: 16px;
`;
export const StyledH402 = styled.h4`
  font-size: 20px;
  font-weight: 500;
  line-height: 1.2;
  margin-left: 16px;
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
`;

export const StyledServicesUl = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const StyledNavLink = styled(NavLink)`
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

export const StyledNavLink02 = styled(NavLink)`
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
