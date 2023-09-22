import styled from 'styled-components';

export const StyledH3 = styled.h3`
  font-size: 30px;
  font-weight: 500;
  line-height: 1.2;
  text-transform: uppercase;
  margin-bottom: 10px;
`;

export const StyledSpan = styled.span`
  color: var(--accent-color);
`;

export const StyledButton = styled.button`
  display: flex;
  margin: 0 auto;
  width: 360px;
  height: 60px;
  justify-content: center;
  color: var(--light-color);
  align-items: center;
  font-weight: 500;
  line-height: 1.5;
  text-transform: uppercase;
  border-radius: 500px;
  background: linear-gradient(95deg, #fdc70d 0%, #fdab0d 100%);
  box-shadow: 0px 24px 50px -20px #fdab0d;
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
`;

export const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledBlogUl = styled.ul`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    gap: 18px;
  }
`;
