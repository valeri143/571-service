import styled, { keyframes } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledImg = styled.img`
  width: 43px;
  height: 38px;
`;

export const StyledDiv = styled.div`
  padding: 11px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 5;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(71, 71, 71, 0.5);
`;

export const StyledMenuButton = styled.button`
  border: none;
  background: none;
  @media (min-width: 1512px) {
    display: none;
  }
`;

export const StyledTelDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
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
`;

export const StyledLangUL = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  margin-bottom: 30px;
`;

export const StyledLangButton = styled.button`
  font-weight: 300;
  color: var(--grey-color);
  line-height: 1.5;
  border: none;
  background: none;
  opacity: 0.5;
  &:hover,
  &:focus,
  &:active {
    color: var(--accent-color);
    opacity: 1;
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
  top: 9.5%;
  left: 0;
  width: 100vw;
  height: 510px;
  padding-top: 34px;
  background: var(--primary-color);
  z-index: 80;
  animation: ${animation} 500ms var(--animation-cubic);
  animation-fill-mode: forwards;
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
`;

export const StyledNavLink = styled(NavLink)`
  color: var(--light-color);
  font-size: 16px;
  font-weight: 300;
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
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  background: linear-gradient(95deg, #fdc70d 0%, #fdab0d 100%);
  box-shadow: 0px 24px 50px -20px #fdab0d;
  transition: background-color 500ms 50ms var(--animation-cubic);
  cursor: pointer;
  overflow: hidden;
  &:hover {
    background-color: var(--background-color);
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
