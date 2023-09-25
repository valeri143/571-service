import styled, { keyframes } from 'styled-components';
import bg1x from '../../images/mobile/backgrounds/bg@1x-min.jpg';
import bg2x from '../../images/mobile/backgrounds/bg@2x-min.jpg';
import bg1xD from '../../images/desktop/backgrounds/main-background@1x-min.png';
import bg2xD from '../../images/desktop/backgrounds/main-background@2x-min.png';
import { motion } from 'framer-motion';

export const StyledBackGroundImage = styled.div`
  background-image: url(${bg1x});
  background-repeat: no-repeat;
  background-size: cover;
  height: 1301px;
  position: relative;
  top: -60px;
  left: 0;
  right: 0;
  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${bg2x});
  }
  @media screen and (min-width: 1512px) {
    top: -78px;
  }
  @media screen and (min-width: 1512px) {
    background-image: url(${bg1xD});
    height: 1071px;
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${bg2xD});
    }
  }
`;

export const StyledContainer = styled.div`
  overflow: hidden;
  padding: 50px 15px 80px 15px;
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
    display: none;
  }
`;

export const StyledDH1 = styled.h1`
  display: none;
  width: 603px;
  color: var(--light-color);
  font-size: 40px;
  font-weight: 700;
  text-transform: uppercase;
  line-height: 1.2;
  margin-bottom: 10px;
  margin-top: 60px;
  @media screen and (min-width: 1512px) {
    display: block;
    margin-bottom: 20px;
  }
`;

export const StyledSpan = styled.span`
  color: var(--accent-color);
  font-size: 30px;
  font-weight: 700;
  line-height: 1.2;
  text-transform: uppercase;
  @media screen and (min-width: 1512px) {
    font-size: 40px;
  }
`;

export const StyledP = styled.p`
  max-width: 360px;
  font-size: 16px;
  color: var(--light-color);
  line-height: 1.5;
  margin-bottom: 20px;
  @media screen and (min-width: 1512px) {
    min-width: 551px;
    font-size: 18px;
    margin-bottom: 30px;
  }
`;

const slideInRight = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;
const slideInLeft = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

export const StyledAnimationDiv = styled.div`
  @media screen and (min-width: 1512px) {
    animation: ${slideInLeft} 1s var(--animation-cubic) forwards;
    position: relative;
    z-index: 2;
  }
`;

const fadeInUp = keyframes`
  0% {
    transform: translateY(100%) rotate(35deg);
  }
  70% {
    transform: translateY(-200px) rotate(2deg);
  }
  90% {
    transform: translateY(-191px) rotate(1deg);
  }
 100% {
    transform: translateY(-195px) rotate(0deg);
  }
`;

const fadeInUpR = keyframes`
  0% {
    transform: translateY(100%) rotate(22deg);
  }
  70% {
    transform: translateY(-200px) rotate(2deg);
  }
  90% {
    transform: translateY(-191px) rotate(1deg);
  }
 100% {
    transform: translateY(-195px) rotate(0deg);
  }
`;

const fadeInUpAndRotate = keyframes`
0% {
  transform: translateY(100%) rotate(22deg);
}
70% {
  transform: translateY(-200px) rotate(13deg);
}
90% {
  transform: translateY(-191px) rotate(12deg);
}
100% {
  transform: translateY(-195px) rotate(12deg);
}
`;

export const StyledAnimationUl = styled.ul`
  margin-top: 50px;
  position: relative;
  @media screen and (min-width: 1512px) {
    animation: ${slideInRight} 1s var(--animation-cubic);
  }
`;

export const StyledAnimationDiv01 = styled.div`
  position: absolute;
  left: 56px;
  display: inline-flex;
  transform: rotate(-4.023deg);
  padding: 11px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 500px;
  border: 1px solid var(--accent-color);
  background: rgba(255, 255, 255, 0.1);
  @media screen and (min-width: 1512px) {
    transform: rotate(35deg);
    left: unset;
    right: 10px;
    bottom: 130px;
    animation: ${fadeInUp} 1.5s 1.5s var(--cubic) forwards;
  }
`;

export const StyledAnimationDiv02 = styled.div`
  position: absolute;
  top: 25px;
  right: 10px;
  display: inline-flex;
  padding: 11px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 500px;
  border: 1px solid var(--accent-color);
  background: rgba(255, 255, 255, 0.1);
  @media screen and (min-width: 1512px) {
    transform: rotate(22deg);
    bottom: 150px;
    top: unset;
    right: 13%;
    transform: rotate(-15deg);
    animation: ${fadeInUpR} 1.5s 1.5s var(--cubic) forwards;
  }
`;

export const StyledAnimationDiv03 = styled.div`
  position: absolute;
  top: 85px;
  display: inline-flex;
  transform: rotate(8.017deg);
  padding: 11px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 500px;
  border: 1px solid var(--accent-color);
  background: rgba(255, 255, 255, 0.1);
  @media screen and (min-width: 1512px) {
    left: unset;
    right: 8%;
    top: -120px;
    transform: rotate(18deg);
    animation: ${fadeInUpAndRotate} 1.5s 1.5s var(--cubic) forwards;
  }
`;

export const StyledAnimationP = styled.p`
  color: var(--light-color);
  line-height: 1.5;
`;

export const StyledImg = styled.picture`
  position: absolute;
  bottom: 395px;
  right: 0;
  @media screen and (min-width: 768px) {
    bottom: 228px;
  }
  @media screen and (min-width: 768px) and (max-width: 1512px) {
    min-width: 1200px;
  }
  @media screen and (min-width: 1512px) {
    animation: ${slideInRight} 1s var(--animation-cubic) forwards;
  }
`;

export const StyledBenefitsUl = styled(motion.ul)`
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: center;
  margin-top: 456px;
  align-items: center;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
  @media screen and (min-width: 1512px) {
    margin-top: 323px;
    flex-wrap: nowrap;
  }
`;
export const StyledBenefitsDiv = styled.div`
  max-width: 320px;
  display: flex;
  align-items: center;
  padding-left: 43px;
  gap: 17px;
  height: 95px;
  border-radius: 8px;
  background: var(--light-color);
  box-shadow: 0px 0px 60px 0px rgba(129, 129, 129, 0.15);
  @media screen and (min-width: 1512px) {
    max-width: 387px;
    height: 130px;
    padding-left: 25px;
    padding-right: 16px;
    gap: 21px;
  }
`;

export const StyledBenefitsDiv01 = styled.div`
  max-width: 327px;
  display: flex;
  align-items: center;
  padding-left: 35px;
  gap: 16px;
  height: 95px;
  border-radius: 8px;
  background: var(--light-color);
  box-shadow: 0px 0px 60px 0px rgba(129, 129, 129, 0.15);
  @media screen and (min-width: 1512px) {
    max-width: 387px;
    height: 130px;
    padding-left: 25px;
    padding-right: 10px;
    gap: 12px;
  }
`;
export const StyledBenefitsDiv02 = styled.div`
  max-width: 302px;
  display: flex;
  align-items: center;
  padding-left: 59px;
  justify-content: center;
  gap: 20px;
  height: 95px;
  border-radius: 8px;
  background: var(--light-color);
  box-shadow: 0px 0px 60px 0px rgba(129, 129, 129, 0.15);
  @media screen and (min-width: 1512px) {
    max-width: 387px;
    height: 130px;
    padding-left: 25px;
    padding-right: 26px;
    gap: 10px;
    gap: 21px;
  }
`;

export const StyledNumP = styled.p`
  color: var(--accent-color);
  font-size: 40px;
  line-height: 1.2;
  text-transform: uppercase;
  @media screen and (min-width: 360px) {
    margin-right: 35px;
  }
  @media screen and (min-width: 1512px) {
    font-size: 50px;
    margin-right: 0;
  }
`;
export const StyledNumP01 = styled.p`
  color: var(--accent-color);
  font-size: 40px;
  line-height: 1.2;
  text-transform: uppercase;
  @media screen and (min-width: 1512px) {
    font-size: 50px;
  }
`;

export const StyledBenefitsP = styled.p`
  line-height: 1.5;
  max-width: 165px;
  @media screen and (min-width: 1512px) {
    font-size: 24px;
    max-width: none;
  }
`;

export const StyledLineDiv = styled.div`
  width: 2px;
  height: 60px;
  background-color: var(--grey-color);
  @media screen and (min-width: 1512px) {
    height: 98px;
  }
`;
