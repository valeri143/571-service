import { useState } from 'react';
import { Formik, ErrorMessage, Form } from 'formik';
import * as yup from 'yup';
import { formatPhoneNumber } from 'helpers/phoneUaInput';
import { Error } from 'components/Error';
import {
  StyledCircleDiv,
  StyledContainer,
} from 'components/SectionServices/SectionServices.styled';
import {
  StyledBackGroundImage,
  StyledBgImg,
  StyledDiv,
  StyledH2,
  StyledH3,
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
  StyledP,
  StyledLink,
  StyledLineDiv,
  StyledFlexDiv,
  StyledSubmittedButton,
  StyledSubmittedSpan,
  StyledSubmittedP,
} from './SectionForm.styled';
import bg from '../../images/bg-circle.png';
import sprite from '../../images/sprite.svg';

const schema = yup.object().shape({
  name: yup.string().required('Please enter your name'),
  number: yup
    .string()
    .min(10, 'Must be more than 10 characters')
    .required("Please enter the phone's number"),
  checkbox: yup.boolean().required('Please check the checkbox to continue'),
});

export const SectionForm = ({ content }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const handleSubmit = ({ name, number }, { resetForm }) => {
    setFormSubmitted(true);
    console.log(name, number);
    // sending data
    resetForm();
  };

  return (
    <section>
      <StyledBackGroundImage>
        <StyledContainer>
          <StyledBgImg src={bg} alt="background-circle" loading="lazy" />
          <StyledDiv>
            <StyledCircleDiv></StyledCircleDiv>
            <StyledH2>{content.h2}</StyledH2>
          </StyledDiv>
          <StyledH3>{content.h3}</StyledH3>
          <Formik
            initialValues={{ name: '', number: '', checkbox: false }}
            validationSchema={schema}
            onSubmit={handleSubmit}
          >
            {({ setFieldValue }) => (
              <Form>
                <StyledFormDiv>
                  <StyledLabel htmlFor="name">{content.labels[0]} </StyledLabel>
                  <StyledBorder></StyledBorder>
                  <StyledSvg width="22" height="22">
                    <use href={`${sprite}#icon-address-book`}></use>
                  </StyledSvg>
                  <StyledField
                    name="name"
                    id="name"
                    placeholder={content.placeholderName}
                    autoComplete="off"
                  />
                  <ErrorMessage name="name" component={Error} />
                </StyledFormDiv>

                <StyledFormDiv>
                  <StyledLabel htmlFor="number">
                    {content.labels[1]}
                  </StyledLabel>
                  <StyledBorderNumber></StyledBorderNumber>
                  <StyledSvg width="22" height="22">
                    <use href={`${sprite}#icon-call-yellow-outline`}></use>
                  </StyledSvg>
                  <StyledField
                    name="number"
                    id="number"
                    placeholder="+380 XXX XX XX XX"
                    autoComplete="off"
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
                </StyledFormDiv>

                <StyledSubmitDiv>
                  <StyledCheckboxLabel>
                    <StyledCheckboxField
                      name="checkbox"
                      type="checkbox"
                      required
                    />
                    <ErrorMessage name="checkbox" component={Error} />
                    {content.checkboxText}
                  </StyledCheckboxLabel>
                  {!formSubmitted && (
                    <StyledButton type="submit">
                      {content.buttonText}
                    </StyledButton>
                  )}
                  {formSubmitted && (
                    <StyledSubmittedButton>
                      <StyledSubmittedP>
                        <StyledSubmittedSpan>
                          {content.buttonSubmittedText[0]}
                        </StyledSubmittedSpan>
                        {content.buttonSubmittedText[1]}
                      </StyledSubmittedP>
                    </StyledSubmittedButton>
                  )}
                </StyledSubmitDiv>
              </Form>
            )}
          </Formik>
          <StyledFlexDiv>
            <StyledLineDiv></StyledLineDiv>
            <div>
              <StyledP>{content.p}</StyledP>
              <StyledLink href="tel:050 936 34 00">050 936 34 00</StyledLink>
            </div>
          </StyledFlexDiv>
        </StyledContainer>
      </StyledBackGroundImage>
    </section>
  );
};
