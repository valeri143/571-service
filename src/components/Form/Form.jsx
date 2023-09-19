import { Formik, ErrorMessage, Field } from 'formik';
import * as yup from 'yup';
import { formatPhoneNumber } from 'helpers/phoneUaInput';
import { Error } from 'components/Error';
import {
  StyledForm,
  StyledField,
  StyledFieldTextArea,
  StyledLabel,
  StyledDiv,
  StyledFlexBoxDiv,
  StyledSelectField,
  StyledSubmitDiv,
  StyledButton,
  StyledSvg,
} from './Form.styled';
import sprite from '../../images/sprite.svg';

const schema = yup.object().shape({
  name: yup.string().required('Please enter your name'),
  number: yup
    .string()
    .min(10, 'Must be more than 10 characters')
    .required("Please enter the phone's number"),
  message: yup.string(),
  checkbox: yup.boolean().required('Please check the checkbox to continue'),
});

export const Form = () => {
  const handleSubmit = ({ name, number }, { resetForm }) => {
    console.log(name, number);
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      {({ setFieldValue }) => (
        <StyledForm>
          <StyledFlexBoxDiv>
            <StyledDiv>
              <StyledLabel for="name">Ваше имя </StyledLabel>
              <StyledSvg width="22" height="22">
                <use href={`${sprite}#icon-address-book`}></use>
              </StyledSvg>
              <StyledField name="name" id="name" placeholder="Иван Иванов" />
              <ErrorMessage name="name" component={Error} />
            </StyledDiv>

            <StyledDiv>
              <StyledLabel for="number"> Номер телефона</StyledLabel>
              <StyledSvg width="22" height="22">
                <use href={`${sprite}#icon-phone-yellow`}></use>
              </StyledSvg>
              <StyledField
                name="number"
                id="number"
                placeholder="+380 XXX XX XX XX"
                onChange={e => {
                  const formattedNumber = formatPhoneNumber(e.target.value);
                  setFieldValue('number', formattedNumber);
                }}
                onFocus={e => {
                  if (!e.target.value) {
                    setFieldValue('number', '+380 ');
                  }
                }}
              />
              <ErrorMessage name="number" component={Error} />
            </StyledDiv>

            <StyledDiv>
              <StyledLabel for="service">Выберите услугу </StyledLabel>
              <StyledSvg width="22" height="22">
                <use href={`${sprite}#icon-clipboard-text`}></use>
              </StyledSvg>
              <StyledSelectField name="service" id="service" as="select">
                <option value="red">Диагностика двигателя</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
              </StyledSelectField>
              <ErrorMessage name="service" component={Error} />
            </StyledDiv>

            <StyledDiv>
              <StyledLabel for="message">Комментарий </StyledLabel>
              <StyledFieldTextArea name="message" id="message" as="textarea" />
              <ErrorMessage name="message" component={Error} />
            </StyledDiv>
          </StyledFlexBoxDiv>

          <StyledSubmitDiv>
            <label>
              <Field name="checkbox" type="checkbox" required />
              <ErrorMessage name="checkbox" component={Error} />Я согласен на
              обработку персональных данных
            </label>
            <StyledButton type="submit">Submit</StyledButton>
          </StyledSubmitDiv>
        </StyledForm>
      )}
    </Formik>
  );
};
