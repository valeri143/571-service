import styled, { keyframes } from 'styled-components';
import { Field } from 'formik';
import bg1x from '../../images/mobile/backgrounds/form-background@1x-min.jpg';
import bg2x from '../../images/mobile/backgrounds/form-background@2x-min.jpg';
import bg1xD from '../../images/desktop/backgrounds/form-background@1x-min.jpg';
import bg2xD from '../../images/desktop/backgrounds/form-background@2x-min.jpg';
import check from '../../images/checkbox.svg';

export const StyledBackGroundImage = styled.div`
  background-image: url(${bg1x});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  height: 645px;
  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${bg2x});
  }
  @media screen and (min-width: 1512px) {
    background: url(${bg1xD}),
      linear-gradient(90deg, #242424 0%, rgba(36, 36, 36, 0) 100%),
      var(--primary-color);
    background-repeat: no-repeat;
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${bg2xD});
      background-size: contain;
    }
  }
`;

export const StyledBgImg = styled.img`
  position: absolute;
  right: 0;
  top: -240px;
  @media (min-width: 1512px) {
    display: none;
  }
`;

export const StyledBgDesktopImg = styled.img`
  display: none;
  position: absolute;
  right: 0;
  bottom: 350px;
  @media (min-width: 1512px) {
    display: block;
  }
`;

export const StyledDiv = styled.div`
  position: absolute;
  z-index: 2;
  top: 49px;
  right: 38px;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  gap: 10px;
  @media screen and (min-width: 1512px) {
    right: 168px;
    top: unset;
  }
`;

export const StyledH2 = styled.h2`
  color: rgba(255, 255, 255, 0.8);
  text-align: right;
  font-size: 12px;
  line-height: 1.5;
  opacity: 0.5;
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
    text-align: left;
    width: 395px;
    margin-right: 200px;
  }
`;

export const StyledFlexFormDesktopDiv = styled.div`
  @media screen and (min-width: 1512px) {
    display: flex;
    justify-content: flex-end;
    gap: 51px;
    align-items: flex-end;
  }
`;

export const StyledFormDiv = styled.div`
  position: relative;
  @media screen and (min-width: 768px) {
    width: 360px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const StyledField = styled(Field)`
  max-width: 270px;
  height: 60px;
  border-radius: 500px;
  border: 1px solid #dadada;
  padding-left: 53px;
  padding-right: 5px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 32px;
  display: block;
  background: transparent;
  color: var(--grey-color);
  font-size: 16px;
  line-height: 1.5;
  &::placeholder {
    opacity: 0.2;
  }
  &:focus,
  &:active,
  &:focus-visible {
    outline: 0px solid #dadada;
  }
  @media screen and (min-width: 350px) {
    width: 270px;
  }
  @media screen and (min-width: 1512px) {
    width: 330px;
  }
`;

export const StyledLabel = styled.label`
  color: var(--light-color);
  font-size: 16px;
  line-height: 1.5;
  position: absolute;
  z-index: 9;
  left: 48px;
  top: -12px;
`;

export const StyledBorder = styled.div`
  background-color: var(--primary-color);
  height: 1px;
  width: 85px;
  position: absolute;
  z-index: 5;
  left: 42px;
  top: 0;
`;

export const StyledBorderNumber = styled.div`
  background-color: var(--primary-color);
  height: 2px;
  width: 138px;
  position: absolute;
  z-index: 5;
  left: 42px;
  top: 0;
`;

export const StyledSvg = styled.svg`
  position: absolute;
  top: 20px;
  left: 36px;
`;

export const StyledSubmitDiv = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: 20px;
`;

export const StyledButton = styled.button`
  display: flex;
  max-width: 330px;
  height: 60px;
  justify-content: center;
  align-items: center;
  color: var(--light-color);
  text-align: center;
  font-weight: 500;
  line-height: 1.5;
  text-transform: uppercase;
  background: linear-gradient(95deg, #fdc70d 0%, #fdab0d 100%);
  box-shadow: 0px 24px 50px -20px #fdab0d;
  border-radius: 500px;
  @media screen and (min-width: 350px) {
    width: 330px;
  }
  @media screen and (min-width: 1512px) {
    transition: all 250ms var(--animation-cubic);
    &:hover,
    &:focus {
      background: linear-gradient(95deg, #fdab0d 0%, #fdc70d 100%);
      box-shadow: 0px 24px 20px -20px #fdab0d;
    }
  }
`;

const fadeIn = keyframes`
0% {
  opacity: 0;
}
50% {
  opacity: 0.2;
}
100% {
  opacity: 1;
}
`;

export const StyledSubmittedButton = styled.div`
  display: flex;
  max-width: 330px;
  height: 60px;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: rgba(49, 176, 4, 1);
  border-radius: 500px;
  animation: ${fadeIn} 500ms var(--animation-cubic);
  @media screen and (min-width: 350px) {
    width: 330px;
  }
`;

export const StyledSubmittedSpan = styled.span`
  color: var(--light-color);
  line-height: 1.5;
  font-size: 18px;
  font-weight: 500;
  text-transform: uppercase;
`;

export const StyledSubmittedP = styled.p`
  display: flex;
  flex-direction: column;
  color: var(--light-color);
  font-size: 14px;
  line-height: 1.5;
`;

export const StyledCheckboxField = styled(Field)`
  appearance: none;
  width: 18px;
  height: 18px;
  border-radius: 4px;
  border: 1px solid #dadada;
  background: var(--background-color);
  &:checked {
    background-image: url(${check});
    background-repeat: no-repeat;
    background-position: center;
  }
`;

export const StyledCheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--grey-color);
  font-size: 12px;
  font-weight: 300;
  line-height: 1.5;
`;

export const StyledFlexDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  @media screen and (min-width: 768px) {
    margin-top: 30px;
  }
  @media screen and (min-width: 1512px) {
    margin-bottom: 30px;
  }
`;

export const StyledLineDiv = styled.div`
  width: 2px;
  height: 74px;
  border-radius: 3px;
  background: var(--accent-color);
`;

export const StyledP = styled.p`
  color: var(--light-color);
  line-height: 1.5;
`;
export const StyledLink = styled.a`
  color: var(--accent-color);
  font-size: 30px;
  line-height: 1.5;
`;
