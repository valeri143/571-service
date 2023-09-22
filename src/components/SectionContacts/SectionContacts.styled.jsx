import styled from 'styled-components';

export const StyledContactsUl = styled.ul`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  @media screen and (min-width: 390px) {
    width: 390px;
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
