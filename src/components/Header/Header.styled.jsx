import styled, { keyframes } from 'styled-components';
import { NavLink } from 'react-router-dom';
export const StyledHeader = styled.header`
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(71, 71, 71, 0.5);
  position: relative;
  z-index: 5;
`;

export const StyledFlexHeaderDiv = styled.div`
  display: none;
  @media (min-width: 1512px) {
    display: flex;
    gap: 162px;
  }
`;

export const StyledLangDiv = styled.div`
  display: flex;
  gap: 40px;
`;

export const StyledImg = styled.img`
  width: 43px;
  height: 38px;
  cursor: pointer;
  @media (min-width: 1512px) {
    width: 64px;
    height: 57px;
  }
`;

export const StyledDiv = styled.div`
  padding: 11px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 5;
  @media (min-width: 390px) {
    margin: 0 auto;
    box-sizing: border-box;
    width: 390px;
  }
  @media (min-width: 768px) {
    width: 768px;
  }
  @media (min-width: 1512px) {
    padding: 11px 156px;
    width: 1512px;
  }
`;

export const StyledMenuButton = styled.button`
  border: none;
  background: none;
  @media (min-width: 1512px) {
    display: none;
  }
`;
export const StyledTelImg = styled.img`
  transition: scale 450ms var(--animation-cubic);
`;

export const StyledTel = styled.a`
  text-align: right;
  font-size: 24px;
  font-weight: 300;
  line-height: 1.3;
  background: linear-gradient(95deg, #fdc70d 0%, #fdab0d 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: font-weight 350ms var(--animation-cubic),
    scale 450ms var(--animation-cubic);
`;
export const StyledTelDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
  &:hover ${StyledTelImg} {
    scale: 1.3;
  }
  &:hover ${StyledTel} {
    scale: 0.98;
    font-weight: 400;
  }
`;

export const StyledLangUL = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  @media (min-width: 1512px) {
    margin-bottom: 0;
  }
`;
export const StyledLangButton = styled.button`
  font-weight: 300;
  line-height: 1.5;
  border: none;
  background: none;
  transition: font-weight 350ms var(--animation-cubic);
  &:hover,
  &:focus {
    font-weight: 500;
  }
`;

export const StyledLangLine = styled.div`
  height: 16px;
  width: 1.5px;
  opacity: 0.5;
  background-color: var(--grey-color);
`;
// HAMBURGER MENU

export const animation = keyframes`
  from {
    max-height: 0;
    opacity: 0;
  }
  to {
    max-height: 100%;
    opacity: 1;
  }
`;

export const StyledHamburgerMenu = styled.div`
  position: fixed;
  right: 50%;
  transform: translateX(50%);
  width: 100vw;
  height: 510px;
  padding-top: 34px;
  background: var(--primary-color);
  z-index: 80;
  animation: ${animation} 500ms var(--animation-cubic);
  animation-fill-mode: forwards;
  @media (min-width: 390px) {
    width: 390px;
  }
  @media (min-width: 768px) {
    width: 768px;
  }
  @media (min-width: 1512px) {
    display: none;
  }
`;

export const StyledMenuNavLinkUl = styled.ul`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 30px;
  @media screen and (min-width: 1512px) {
    flex-direction: row;
    gap: 60px;
    margin-bottom: 0;
  }
`;

export const StyledNavLink = styled(NavLink)`
  color: var(--light-color);
  font-size: 16px;
  font-weight: 300;
  transition: color 450ms var(--animation-cubic);
  &::before {
    content: '';
    display: block;
    margin: 0 auto;
    width: 4px;
    height: 4px;
    background: linear-gradient(95deg, #fdc70d 0%, #fdab0d 100%);
    border-radius: 50%;
    opacity: 0;
    transition: opacity 250ms var(--animation-cubic),
      color 550ms var(--animation-cubic);
  }
  &:hover::before,
  &:focus::before,
  &:active::before {
    opacity: 1;
  }

  &:hover,
  &:focus,
  &:active {
    color: var(--accent-color);
  }
`;

export const StyledButtonDiv = styled.div`
  max-width: 300px;
  height: 60px;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 14px;
  padding-right: 45px;
  border-radius: 500px;
  position: relative;
  z-index: 4;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  background: linear-gradient(95deg, #fdc70d 0%, #fdab0d 100%);
  box-shadow: 0px 24px 50px -20px #fdab0d;
  transition: background-color 500ms 50ms var(--animation-cubic);
  cursor: pointer;
  &:hover {
    background-color: var(--background-color);
  }
  @media (min-width: 1512px) {
    margin-bottom: 80px;
  }
`;

export const StyledCircleDiv = styled.div`
  z-index: -1;
  position: relative;
  opacity: 1;
  background-color: var(--background-color);
  width: 32px;
  height: 32px;
  border-radius: 50%;
  pointer-events: none;
  transform-origin: left;
  transition: scale 400ms var(--animation-cubic),
    opacity 400ms 50ms var(--animation-cubic);
  ${StyledButtonDiv}:hover & {
    scale: 13;
    transform: translateX(-3px);
    opacity: 0;
  }
`;

export const StyledSvg = styled.svg`
  position: absolute;
  top: 21px;
  left: 21px;
`;

export const StyledButtonP = styled.p`
  line-height: 1.5;
  color: var(--background-color);
  font-weight: 500;
  text-transform: uppercase;
  ${StyledButtonDiv}:hover & {
    color: var(--primary-color);
  }
`;

// SERVICE MENU

export const StyledServiceMenu = styled.div`
  display: none;
  position: absolute;
  z-index: 80;
  right: 50%;
  transform: translateX(50%);
  width: 1200px;
  min-height: 140px;
  padding-top: 22px;
  padding-bottom: 22px;
  border-radius: 0px 0px 8px 8px;
  background: linear-gradient(
    0deg,
    rgba(253, 199, 13, 1) 0%,
    rgba(241, 241, 241, 1) 48%
  );
  box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.5);
  animation: ${animation} 500ms var(--animation-cubic);
  animation-fill-mode: forwards;
  @media (min-width: 1512px) {
    display: block;
  }
`;

export const StyledServiceMenuUl = styled.ul`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;

export const StyledServiceMenuDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 175px;
  height: 126px;
  padding-top: 10px;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;
  transition: border-radius 350ms var(--animation-cubic), background 350ms var(--animation-cubic), box-shadow 350ms var(--animation-cubic);
  &:hover, &:focus {
    border-radius: 8px;
background: var(--light-color);
box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.10);
  },
`;

export const StyledServiceMenuP = styled.p`
  font-size: 16px;
  font-weight: 300;
  line-height: 1.2;
  transition: color 350ms var(--animation-cubic),
    font-weight 550ms var(--animation-cubic);
  ${StyledServiceMenuDiv}:hover & {
    color: var(--accent-color);
    font-weight: 400;
  }
  ${StyledServiceMenuDiv}:focus & {
    color: var(--accent-color);
    font-weight: 400;
  }
`;

// SERVICE MENU MOBILE

export const StyledServiceMenuMobile = styled.div`
  position: absolute;
  z-index: 80;
  top: 130px;
  right: 50%;
  transform: translateX(50%);
  min-height: 80px;
  padding: 10px 5px 5px 5px;
  border-radius: 0px 0px 8px 8px;
  background: linear-gradient(
    0deg,
    rgba(253, 199, 13, 1) 0%,
    rgba(241, 241, 241, 1) 48%
  );
  box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.5);
  animation: ${animation} 500ms var(--animation-cubic);
  animation-fill-mode: forwards;
  @media (min-width: 1512px) {
    display: none;
  }
`;

export const StyledServiceMenuUlMobile = styled.ul`
  display: flex;
  gap: 5px;
  justify-content: space-around;
  align-items: center;
`;

export const StyledServiceMenuDivMobile = styled.div`
  display: flex;
  flex-direction: column;
  width: 75px;
  padding-top: 10px;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;
  transition: border-radius 350ms var(--animation-cubic), background 350ms var(--animation-cubic), box-shadow 350ms var(--animation-cubic);
  &:hover, &:focus {
    border-radius: 8px;
background: var(--light-color);
box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.10);
  },
`;

export const StyledServiceMenuPMobile = styled.p`
  font-size: 11px;
  font-weight: 500;
  line-height: 1.2;
  text-align: center;
  transition: color 350ms var(--animation-cubic),
    font-weight 550ms var(--animation-cubic);
`;
