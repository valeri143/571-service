import styled from 'styled-components';

export const StyledDiv = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
  @media screen and (min-width: 1512px) {
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
    text-indent: 200px;
    font-size: 38px;
    max-width: 997px;
    margin-left: auto;
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
  max-width: 360px;
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 30px;
  @media screen and (min-width: 1512px) {
    font-size: 18px;
    margin-bottom: 50px;
    max-width: 794px;
    margin-left: auto;
    margin-right: auto;
  }
`;
export const StyledBgImg = styled.img`
  position: absolute;
  right: 0;
  top: -135px;
  @media screen and (min-width: 1512px) {
    display: none;
  }
`;
export const StyledDesktopBgImg = styled.img`
  display: none;
  position: absolute;
  left: 0;
  top: -46px;
  @media screen and (min-width: 1512px) {
    display: block;
  }
`;

export const StyledAboutDiv = styled.div`
  position: relative;
  @media screen and (min-width: 1512px) {
    transition: background 250ms var(--animation-cubic),
      width 250ms var(--animation-cubic), height 250ms var(--animation-cubic);
    &:hover {
      &::before {
        content: '';
        position: absolute;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000 100%);
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }
  }
`;
export const StyledImg = styled.picture`
  border-radius: 8px;
`;

export const StyledPositionImg = styled.img`
  position: absolute;
  top: 20px;
  right: 20px;
  @media screen and (min-width: 1512px) {
    opacity: 0;
    transition: opacity 250ms var(--animation-cubic);
    ${StyledAboutDiv}:hover & {
      opacity: 1;
    }
    ${StyledAboutDiv}:focus & {
      opacity: 1;
    }
  }
`;

export const StyledH4 = styled.h4`
  position: absolute;
  left: 12px;
  bottom: 190px;
  color: var(--light-color);
  font-size: 20px;
  font-weight: 500;
  line-height: 1.2;
  @media screen and (min-width: 360px) {
    bottom: 170px;
  }
  @media screen and (min-width: 1512px) {
    font-size: 24px;
    bottom: 30px;
    left: 20px;
    transition: bottom 250ms 100ms var(--animation-cubic);
    ${StyledAboutDiv}:hover & {
      bottom: 138px;
    }
    ${StyledAboutDiv}:focus & {
      bottom: 138px;
    }
  }
`;

export const StyledH402 = styled.h4`
  position: absolute;
  left: 12px;
  top: 15px;
  color: var(--light-color);
  font-size: 20px;
  font-weight: 500;
  line-height: 1.2;
  @media screen and (min-width: 360px) {
    top: 75px;
  }
  @media screen and (min-width: 380px) {
    top: 100px;
  }
  @media screen and (min-width: 1512px) {
    font-size: 24px;
    bottom: 30px;
    left: 20px;
    top: unset;
    transition: bottom 250ms 100ms var(--animation-cubic);
    ${StyledAboutDiv}:hover & {
      bottom: 192px;
    }
    ${StyledAboutDiv}:focus & {
      bottom: 192px;
    }
  }
`;

export const StyledAboutP = styled.p`
  position: absolute;
  left: 12px;
  bottom: 16px;
  color: var(--light-color);
  font-size: 16px;
  line-height: 1.5;
  @media screen and (min-width: 1512px) {
    font-size: 18px;
    opacity: 0;
    left: 20px;
    transition: opacity 250ms ease-in-out;
    ${StyledAboutDiv}:hover & {
      opacity: 1;
    }
    ${StyledAboutDiv}:focus & {
      opacity: 1;
    }
  }
`;
