import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledContainer = styled.div`
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
    padding: 100px 0px 150px 0px;
  }
`;

export const StyledContentContainer = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  @media screen and (min-width: 1512px) {
    padding-left: 156px;
    padding-right: 156px;
  }
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
    font-size: 38px;
    max-width: 648px;
  }
`;

export const StyledSwiperButton = styled.button`
  position: absolute;
  right: 0;
  top: 58%;
  z-index: 10;
  @media screen and (min-width: 1512px) {
    display: none;
  }
`;

export const StyledNavLink = styled(NavLink)`
  color: var(--accent-color);
  line-height: 1.5;
  @media screen and (min-width: 1512px) {
    position: absolute;
    right: 156px;
    top: 250px;
    z-index: 10;
  }
`;

export const StyledUnderlineSpan = styled.span`
  @media screen and (min-width: 1512px) {
    ${StyledNavLink} &:hover {
      text-decoration: underline;
    }
  }
`;
