import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledFooter = styled.footer`
  background-color: var(--primary-color);
`;

export const StyledFlexBoxDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: flex-start;
  justify-content: space-between;
  row-gap: 30px;
  flex-basis: calc((100% - 20px) / 2);
  @media screen and (min-width: 1512px) {
    justify-content: flex-end;
    row-gap: 0;
    gap: 61px;
  }
`;
export const StyledImg = styled.img`
  @media screen and (min-width: 1512px) {
    width: 92px;
    height: 81px;
  }
`;
export const StyledImgDiv = styled.div`
  margin-bottom: 20px;
  @media screen and (min-width: 1512px) {
    position: absolute;
    top: 70px;
    left: 156px;
  }
`;

export const StyledPhoneLink = styled.a`
  color: var(--accent-color);
  transition: color 450ms var(--animation-cubic);

  &:hover,
  &:focus,
  &:active {
    color: var(--grey-color);
    opacity: 0.8;
  }
`;

export const StyledNumberDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const StyledP = styled.p`
  color: var(--grey-color);
  font-size: 12px;
  font-weight: 300;
  line-height: 1.5;
  opacity: 0.8;
`;

export const StyledLink = styled.a`
  color: var(--light-color);
  font-size: 16px;
  line-height: 1.5;
  transition: color 450ms var(--animation-cubic);

  &:hover,
  &:focus,
  &:active {
    color: var(--accent-color);
  }
`;

export const StyledTimeDiv = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 2px;
`;

export const StyledContactsDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const StyledH5 = styled.h3`
  color: var(--light-color);
  font-weight: 500;
  line-height: 1.2;
  margin-bottom: 20px;
`;

export const StyledItemNavLink = styled(NavLink)`
  color: var(--grey-color);
  font-size: 12px;
  font-weight: 300;
  line-height: 1.5;
  opacity: 0.8;
  transition: color 450ms var(--animation-cubic);

  &:hover,
  &:focus,
  &:active {
    color: var(--accent-color);
  }
`;
export const StyledItemP = styled(NavLink)`
  color: var(--grey-color);
  font-size: 12px;
  font-weight: 300;
  line-height: 1.5;
  opacity: 0.8;
  cursor: auto;
`;

export const StyledNavLinksListUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
  width: 174px;
  @media screen and (min-width: 1512px) {
    width: 220px;
  }
`;

export const StyledFooterLineDiv = styled.div`
  position: absolute;
  left: 0;
  max-width: 390px;
  height: 1px;
  opacity: 0.5;
  background: #dadada;
  margin-top: 40px;
  margin-bottom: 30px;
  @media screen and (min-width: 390px) {
    width: 390px;
  }
  @media screen and (min-width: 768px) {
    width: 768px;
    max-width: none;
  }
  @media screen and (min-width: 1512px) {
    width: 1200px;
    margin: 0 auto;
    position: static;
    margin-top: 50px;
  }
`;

export const StyledConfidenceDiv = styled.div`
  @media screen and (min-width: 1512px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 30px;
  }
`;

export const StyledConfidenceP = styled.p`
  color: var(--grey-color);
  font-size: 12px;
  font-weight: 300;
  line-height: 1.5;
  margin-top: 70px;
  text-align: center;
  margin-bottom: 20px;
  @media screen and (min-width: 1512px) {
    margin: 0;
  }
`;

export const StyledRightsP = styled.p`
  color: var(--grey-color);
  font-size: 12px;
  font-weight: 300;
  line-height: 1.5;
  text-align: center;
  opacity: 0.5;
`;
