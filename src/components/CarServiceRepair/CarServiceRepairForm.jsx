import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Formik, ErrorMessage, Form } from 'formik';
import * as yup from 'yup';
import { phoneInputHandler } from 'helpers/phoneUaInput';
import { Error } from 'components/Error';
import { StyledFormikDiv, StyledH3 } from './CarServiceRepair.styled';
import {
  StyledFormDiv,
  StyledLabel,
  StyledField,
  StyledSubmitDiv,
  StyledButton,
  StyledBorder,
  StyledBorderNumber,
  StyledSvg,
  StyledCheckboxLabel,
  StyledCheckboxField,
  StyledSubmittedButton,
  StyledSubmittedSpan,
  StyledSubmittedP,
} from '../SectionForm/SectionForm.styled';
import { sendEmail } from 'helpers/sendEmail';
import sprite from '../../images/sprite.svg';

export const schema = yup.object().shape({
  name: yup.string().required('Please enter your name'),
  number: yup
    .string()
    .min(10, 'Must be more than 10 characters')
    .required("Please enter the phone's number"),
  checkbox: yup.boolean().required('Please check the checkbox to continue'),
});
export const CarServiceRepairForm = () => {
  const [t] = useTranslation();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const handleSubmit = async ({ name, number }, { resetForm }) => {
    setFormSubmitted(true);
    try {
      await sendEmail({
        name,
        number,
      });
      setFormSubmitted(true);
    } catch (error) {
      console.log(error);
    }

    resetForm();
  };
  return (
    <StyledFormikDiv>
      <StyledH3>{t('form.h3')}</StyledH3>
      <Formik
        initialValues={{ name: '', number: '', checkbox: false }}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form>
          <StyledFormDiv>
            <StyledLabel htmlFor="name">{t('form.labels.0')} </StyledLabel>
            <StyledBorder></StyledBorder>
            <StyledSvg width="22" height="22">
              <use href={`${sprite}#icon-address-book`}></use>
            </StyledSvg>
            <StyledField
              name="name"
              id="name"
              placeholder={t('form.placeholderName')}
              autoComplete="off"
            />
            <ErrorMessage name="name" component={Error} />
          </StyledFormDiv>

          <StyledFormDiv>
            <StyledLabel htmlFor="number">{t('form.labels.1')}</StyledLabel>
            <StyledBorderNumber></StyledBorderNumber>
            <StyledSvg width="22" height="22">
              <use href={`${sprite}#icon-call-yellow-outline`}></use>
            </StyledSvg>
            <StyledField
              name="number"
              id="number"
              type="tel"
              placeholder="+38 XXX ХXX XX XX"
              autoComplete="off"
              onClick={phoneInputHandler}
            />
            <ErrorMessage name="number" component={Error} />
          </StyledFormDiv>

          <StyledSubmitDiv>
            <StyledCheckboxLabel>
              <StyledCheckboxField name="checkbox" type="checkbox" required />
              <ErrorMessage name="checkbox" component={Error} />
              {t('form.checkboxText')}
            </StyledCheckboxLabel>
            {!formSubmitted && (
              <StyledButton type="submit">
                {t('header.buttonText')}
              </StyledButton>
            )}
            {formSubmitted && (
              <StyledSubmittedButton>
                <StyledSubmittedP>
                  <StyledSubmittedSpan>
                    {t('form.buttonSubmittedText.0')}
                  </StyledSubmittedSpan>
                  {t('form.buttonSubmittedText.1')}
                </StyledSubmittedP>
              </StyledSubmittedButton>
            )}
          </StyledSubmitDiv>
        </Form>
      </Formik>
    </StyledFormikDiv>
  );
};
