import styled from 'styled-components';
export const StyledH3 = styled.h3`
  max-width: 266px;
  margin: 0 auto;
  text-align: center;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.2;
  text-transform: uppercase;
  position: relative;
  z-index: 2;
  margin-bottom: 20px;
  @media screen and (min-width: 1512px) {
    font-size: 38px;
    max-width: 788px;
    padding-bottom: 190px;
  }
`;

export const StyledContactsUl = styled.ul`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 15px;
  }
  @media screen and (min-width: 1512px) {
    gap: 20px;
    position: absolute;
    bottom: -60px;
    z-index: 10;
  }
`;

export const StyledOrderLi = styled.li`
  @media screen and (min-width: 1512px) {
    order: -1;
  }
`;

export const StyledContactsDiv = styled.div`
  min-width: 320px;
  height: 170px;
  max-height: 234px;
  padding-top: 60px;
  position: relative;
  text-align: center;
  border-radius: 8px 8px 0px 0px;
  background: var(--light-color);
  box-shadow: 0px 0px 60px 0px rgba(129, 129, 129, 0.15);
  cursor: pointer;
  @media screen and (min-width: 390px) {
    width: 390px;
  }
  @media screen and (min-width: 768px) {
    width: 360px;
  }
  @media screen and (min-width: 1512px) {
    width: 386px;
    max-height: 100px;
  }
`;

export const StyledContactsSvg = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: -100px;
  margin-bottom: 20px;
  width: 80px;
  height: 80px;
  background: linear-gradient(95deg, #fdc70d 0%, #fdab0d 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 1512px) {
    transition: scale 250ms var(--animation-cubic);
    ${StyledContactsDiv}:hover & {
      scale: 1.2;
    }
  }
`;

export const StyledContactsP = styled.p`
  text-align: center;
  font-size: 12px;
  line-height: 1.5;
  opacity: 0.5;
`;

export const StyledLink = styled.a`
  width: 276px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.5;
  @media screen and (min-width: 1512px) {
    transition: color 250ms var(--animation-cubic);
    ${StyledContactsDiv}:hover & {
      color: var(--accent-color);
    }
  }
`;

export const IframeMob = styled.iframe`
  width: 100vw;
  @media screen and (min-width: 390px) {
    width: 390px;
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
export const IframeTab = styled.iframe`
  display: none;
  @media screen and (min-width: 768px) and (max-width: 1511px) {
    display: block;
  }
`;

export const IframeDesk = styled.iframe`
  display: none;
  @media screen and (min-width: 1512px) {
    display: block;
  }
`;
