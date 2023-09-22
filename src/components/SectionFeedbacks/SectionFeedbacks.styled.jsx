import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledSwiperButton = styled.button`
  background: none;
  border: none;
  position: absolute;
  right: 0;
  top: 58%;
  z-index: 10;
`;

export const StyledNavLink = styled(NavLink)`
  color: var(--accent-color);
  line-height: 1.5;
`;
