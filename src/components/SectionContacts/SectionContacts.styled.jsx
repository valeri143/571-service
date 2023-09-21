import styled from 'styled-components';

export const StyledContactsUl = styled.ul`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledContactsDiv = styled.div`
  width: 98vw;
  height: 170px;
  max-height: 234px;
  padding-top: 60px;
  position: relative;
  text-align: center;
  border-radius: 8px 8px 0px 0px;
  background: var(--light-color);
  box-shadow: 0px 0px 60px 0px rgba(129, 129, 129, 0.15);
`;

export const StyledContactsSvg = styled.div`
  position: absolute;
  top: -40px;
  left: 38%;
  width: 80px;
  height: 80px;
  background: linear-gradient(95deg, #fdc70d 0%, #fdab0d 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
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
`;
