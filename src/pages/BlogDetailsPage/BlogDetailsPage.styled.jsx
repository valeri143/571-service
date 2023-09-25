import styled from 'styled-components';

export const StyledDateP = styled.p`
  font-size: 12px;
  line-height: 1.5;
  opacity: 0.5;
  margin-top: 20px;
  margin-bottom: 7px;
`;

export const StyledH3 = styled.h3`
  font-weight: 500;
  line-height: 1.2;
  @media screen and (min-width: 1512px) {
    font-size: 24px;
  }
`;

export const StyledP = styled.p`
  font-size: 16px;
  line-height: 1.6;
  margin-top: 20px;
  @media screen and (min-width: 1512px) {
    max-width: 794px;
  }
`;

export const StyledLi = styled.li`
  margin-bottom: 30px;
`;

export const StyledImg = styled.img`
  @media screen and (min-width: 768px) {
    margin-left: auto;
  }
`;

export const StyledDiv = styled.div`
  border-radius: 8px;
  background: var(--light-color);
  box-shadow: 0px 0px 60px 0px rgba(129, 129, 129, 0.15);
  padding: 20px 30px 20px 30px;
  max-width: 387px;
`;

export const StyledUl = styled.ul`
  display: none;
  @media screen and (min-width: 1512px) {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

export const StyledFlexDiv = styled.div`
  @media screen and (min-width: 1512px) {
    display: flex;
    gap: 20px;
  }
`;

export const StyledNewDiv = styled.div`
  display: flex;
  width: 100px;
  height: 30px;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  line-height: 1.2;
  background-color: var(--accent-color);
  border-top-right-radius: 8px;
  position: absolute;
  right: 13.5px;
  @media screen and (min-width: 1512px) {
    right: 39.7%;
  }
`;

export const StyledBlockP = styled.p`
  width: 327px;
  font-weight: 500;
  line-height: 1.2;
`;

export const StyledOpacityP = styled.p`
  line-height: 1.5;
  opacity: 0.5;
  margin-top: 10px;
`;
