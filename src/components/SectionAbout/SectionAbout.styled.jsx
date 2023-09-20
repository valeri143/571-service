import styled from 'styled-components';

export const StyledBgImg = styled.img`
  position: absolute;
  right: 0;
  top: -135px;
`;

export const StyledImg = styled.img`
  border-radius: 8px;
`;

export const StyledAboutDiv = styled.div`
  position: relative;
`;

export const StyledPositionImg = styled.img`
  position: absolute;
  top: 20px;
  right: 20px;
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
`;

export const StyledAboutP = styled.p`
  position: absolute;
  left: 12px;
  bottom: 16px;
  color: var(--light-color);
  font-size: 16px;
  line-height: 1.5;
`;
