import styled from 'styled-components';
import { Form } from 'formik';

export const StyledFeedbackDiv = styled.div`
  max-width: 360px;
  height: 347px;
  padding: 16px;
  position: relative;
  border-radius: 8px;
  background: var(--light-color);
  box-shadow: 0px 0px 60px 0px rgba(129, 129, 129, 0.15);
  margin-bottom: 30px;
  @media screen and (min-width: 1512px) {
    max-width: none;
    width: 500px;
    padding: 30px;
    height: 300px;
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
  @media screen and (min-width: 768px) {
    max-width: 500px;
  }
  @media screen and (min-width: 1512px) {
    text-indent: 200px;
    font-size: 38px;
    max-width: 830px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const StyledVacanciesP = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 1.5;
`;

export const StyledLi = styled.li`
  list-style: disc;
  margin-left: 25px;
`;

export const StyledSalaryP = styled.p`
  font-weight: 500;
  line-height: 1.1;
`;

export const StyledLink = styled.a`
  text-align: right;
  font-size: 16px;
  font-weight: 300;
  line-height: 1.9;
  background: linear-gradient(95deg, #fdc70d 0%, #fdab0d 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const StyledFormH3 = styled.h3`
  width: 248px;
  color: var(--light-color);
  text-align: center;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.2;
  text-transform: uppercase;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
  @media screen and (min-width: 1512px) {
    margin-bottom: 20px;
    font-size: 38px;
    width: 585px;
  }
`;

export const StyledFormP = styled.p`
  color: var(--light-color);
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 32px;
  width: 300px;
  @media screen and (min-width: 1512px) {
    font-size: 18px;
    width: auto;
  }
`;

export const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 1512px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
  }
`;

export const StyledFormikDiv = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;
  max-width: 360px;
  max-height: 470px;
  border-radius: 8px;
  background: var(--primary-color);
  margin-left: auto;
  margin-right: auto;
  @media screen and (min-width: 1512px) {
    padding-top: 100px;
    max-width: none;
    width: 1207px;
    padding-bottom: 100px;
  }
`;

export const StyledFormDiv = styled.div`
  position: relative;
  @media screen and (min-width: 768px) {
    width: 360px;
    margin-left: auto;
    margin-right: auto;
  }
  @media screen and (min-width: 1512px) {
    margin: 0;
  }
`;

export const StyledForm = styled(Form)`
  @media screen and (min-width: 1512px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
