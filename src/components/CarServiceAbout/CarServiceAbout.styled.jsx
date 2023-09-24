import styled from 'styled-components';

export const StyledCarServiceUl = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 15px;
  }
`;

export const StyledCarServiceDiv = styled.div`
  position: relative;
  max-width: 360px;
  max-height: 326px;
  padding-bottom: 20px;
  border-radius: 8px;
  background: var(--light-color);
  box-shadow: 0px 0px 60px 0px rgba(129, 129, 129, 0.15);
  @media screen and (min-width: 1512px) {
    width: 387px;
    height: 325px;
    background: var(--background-color);
    box-shadow: none;
    transition: background 250ms ease-in-out, box-shadow 250ms ease-in-out;
    &:hover,
    &:focus {
      background: var(--light-color);
      box-shadow: 0px 0px 60px 0px rgba(129, 129, 129, 0.15);
    }
  }
`;

export const StyledCarServiceH4 = styled.h4`
  margin-left: 16px;
  margin-top: 20px;
  font-weight: 500;
  line-height: 1.2;
  width: 246px;
  @media screen and (min-width: 1512px) {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    // margin-left: 40px;
    transition: transform 250ms ease-in-out, position 250ms ease-in-out;
    ${StyledCarServiceDiv}:hover &, ${StyledCarServiceDiv}:focus & {
      position: static;
      transform: translateX(0%);
    }
  }
`;

export const StyledCarServiceButton = styled.button`
  position: absolute;
  bottom: 14px;
  right: 16px;
  @media screen and (min-width: 1512px) {
    opacity: 0;
    transition: opacity 250ms ease-in-out;
    ${StyledCarServiceDiv}:hover &, ${StyledCarServiceDiv}:focus & {
      opacity: 1;
    }
  }
`;
