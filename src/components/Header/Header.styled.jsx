import { keyframes } from '@emotion/react';
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
  height: 820px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${bg2x});
  }
`;

export const StyledDiv = styled.div`
  padding-top: 25px;
  padding-bottom: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 5;
`;
export const StyledNavUL = styled.ul`
  display: flex;
  gap: 40px;
  font-size: 15px;
  font-family: 'Gilroy Semibold';
  color: var(--background-color);
  margin-right: 177px;
  margin-left: 99px;
`;

export const StyledTelDiv = styled.div`
  display: flex;
  align-items: center;
  margin-right: 49px;
  position: relative;
  cursor: pointer;
`;

export const StyledTel = styled.a`
  color: var(--background-color);
  text-align: right;
  font-size: 20px;
  font-family: Gilroy Bold;
  line-height: 1.5;
  margin-left: 11px;
  margin-right: 9px;
`;

export const StyledSvgUp = styled.svg`
  transform: rotate(180deg);
`;

export const fadeIn = keyframes`
  from {
    max-height: 0;
    opacity: 0;
  }
  to {
    max-height: 100px; 
    opacity: 1;
  }
`;

export const StyledTelUnderDiv = styled.div`
  position: absolute;
  left: 30px;
  bottom: -12px;
  overflow: hidden;
  animation: ${fadeIn} 250ms var(--animation-cubic);
  animation-fill-mode: forwards;
  opacity: 0;
`;

export const StyledP = styled.p`
  color: var(--background-color);
  font-size: 13px;
  font-family: Gilroy Semibold;
`;

export const StyledLangUL = styled.ul`
  display: flex;
  gap: 15px;
  border: none;
  background: none;
`;

export const StyledLangButton = styled.button`
  font-size: 14px;
  font-family: Gilroy Semibold;
  color: var(--background-color);
  line-height: 1.6;
  border: none;
  background: none;
  opacity: 0.5;
  &:hover,
  &:focus,
  &:active {
    opacity: 1;
  }
`;
