import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledContainer = styled.div`
  margin: 0 auto;
  box-sizing: border-box;
  outline: solid tomato;
  max-width: 1920px;
  padding: 200px 185px 135px 185px;
  margin-top: 680px;
  position: relative;
`;
export const StyledBenefitsUl = styled.ul`
  display: flex;
  gap: 30px;
  justify-content: center;
  position: absolute;
  top: -65px;
`;

export const StyledBenefitsDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 370px;
  height: 130px;
  padding-left: 31px;
  border-radius: 8px;
  background: var(--background-color);
  box-shadow: 0px 0px 60px 0px rgba(129, 129, 129, 0.15);
`;

export const StyledNumP = styled.p`
  color: var(--accent-color);
  font-size: 48px;
  line-height: 1.2;
`;

export const StyledBenefitsP = styled.p`
  font-size: 24px;
`;

export const StyledLineDiv = styled.div`
  width: 1.5px;
  height: 98px;
  background-color: #dadada;
`;

export const StyledBenefitsSpan = styled.span`
  font-size: 24px;
  font-family: 'Gilroy Bold';
`;

export const StyledH2 = styled.h2`
  font-size: 40px;
  line-height: 1.2;
  margin-bottom: 5px;
`;

export const StyledP = styled.p`
  width: 739px;
  line-height: 2;
  margin-bottom: 40px;
`;

export const StyledDiv = styled.div`
  width: 370px;
  height: 595px;
  border-radius: 8px;
  background: var(--background-color);
  box-shadow: 0px 0px 60px 0px rgba(129, 129, 129, 0.15);
  padding: 39px 28px 0px 32px;
`;

export const StyledCircleDiv = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 600px;
  background-color: #f5f5f5;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  margin-bottom: 24px;
`;

export const StyledSvg = styled.svg`
  position: absolute;
  top: 25px;
  left: 25px;
`;

export const StyledH3 = styled.h3`
  text-align: center;
  font-size: 24px;
  line-height: 1.3;
  margin-bottom: 11px;
`;

export const StyledServicesUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-bottom: 52px;
`;

export const StyledServicesDiv = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const StyledNavLink = styled(NavLink)`
  width: 200px;
  height: 58px;
  border-radius: 666px;
  background: var(--button-color);
  box-shadow: 0px 21px 20px -17px rgba(253, 199, 5, 0.65);
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const StyledUl = styled.ul`
  display: flex;
  justify-content: center;
  gap: 30px;
`;
