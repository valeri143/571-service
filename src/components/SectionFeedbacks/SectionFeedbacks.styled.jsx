import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledSwiperDiv = styled.div`
  position: relative;
`;

export const StyledSwiperButton = styled.button`
  background: none;
  border: none;
  position: absolute;
  right: -20px;
  top: 45%;
  z-index: 10;
`;

export const StyledNavLink = styled(NavLink)`
  color: var(--accent-color);
  line-height: 1.5;
`;
