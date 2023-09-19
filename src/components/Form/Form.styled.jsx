import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const StyledForm = styled(Form)`
  width: 690px;
  height: 320px;
  padding: 35px 33px 41px 37px;
  border-radius: 8px;
  background: var(--background-color);
  box-shadow: 0px 0px 60px 0px rgba(129, 129, 129, 0.15);
`;

export const StyledFlexBoxDiv = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: wrap;
  flex-basis: calc((100% - 40px) / 2);
`;
export const StyledDiv = styled.div`
  position: relative;
`;

export const StyledSvg = styled.svg`
  position: absolute;
  top: 20px;
  left: 19px;
`;

export const StyledField = styled(Field)`
  padding-left: 53px;
  padding-right: 5px;
  width: 280px;
  height: 60px;
  border-radius: 4px;
  border: 1px solid #dadada;
  background: #f5f5f5;
  &::placeholder {
    opacity: 1;
    font-family: Gilroy Medium;
    font-size: 14px;
    line-height: 1.2;
  }
  &:focus,
  &:active,
  &:focus-visible {
    outline: 2px solid #dadada;
  }
`;

export const StyledSelectField = styled(Field)`
  padding-left: 48px;
  width: 340px;
  height: 65px;
  border-radius: 4px;
  border: 1px solid var(--4, #dadada);
  background: var(--3, #f5f5f5);
  font-family: Gilroy Medium;
  font-size: 14px;
  line-height: 1.2;
`;

export const StyledFieldTextArea = styled(Field)`
  padding-left: 19px;
  padding-right: 19px;
  resize: none;
  width: 300px;
  height: 60px;
  border-radius: 4px;
  border: 1px solid var(--4, #dadada);
  background: var(--3, #f5f5f5);
`;

export const StyledLabel = styled.label`
  color: var(--3, #828282);
  font-family: Gilroy;
  font-size: 13px;
  line-height: 1.3;
  height: 9px;
  position: absolute;
  left: 23px;
  top: -8px;
  background: var(--background-color);
`;

export const StyledSubmitDiv = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  align-items: center;
  gap: 29px;
`;

export const StyledButton = styled.button`
  width: 200px;
  height: 58px;
  border: none;
  border-radius: 666px;
  background: var(--button-color);
  box-shadow: 0px 21px 20px -17px rgba(253, 199, 5, 0.65);
  font-size: 15px;
`;
