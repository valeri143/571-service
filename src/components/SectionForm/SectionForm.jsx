import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Formik, ErrorMessage, Form } from 'formik';
import { motion } from 'framer-motion';
import * as yup from 'yup';
import { formatPhoneNumber } from 'helpers/phoneUaInput';
import { Error } from 'components/Error';
import {
  StyledCircleDiv,
  StyledContainer,
} from 'components/SectionServices/SectionServices.styled';
import { animation } from '../Hero/Hero';
import { animationRight } from '../SectionCertifications/SectionCertifications';
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
  StyledBgDesktopImg,
  StyledFlexFormDesktopDiv,
} from './SectionForm.styled';
import bg from '../../images/mobile/bg-circle.png';
import bgD from '../../images/desktop/bg-circle-right.png';
import sprite from '../../images/sprite.svg';

const schema = yup.object().shape({
  name: yup.string().required('Please enter your name'),
  number: yup
    .string()
    .min(10, 'Must be more than 10 characters')
    .required("Please enter the phone's number"),
  checkbox: yup.boolean().required('Please check the checkbox to continue'),
});

const SectionForm = () => {
  const [t] = useTranslation();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const handleSubmit = ({ name, number }, { resetForm }) => {
    setFormSubmitted(true);
    // console.log(name, number);
    // sending data
    resetForm();
  };

  return (
    <motion.section
      initial={window.innerWidth >= 1512 ? 'hidden' : 'visible'}
      whileInView="visible"
      viewport={{ amount: 0.7, once: true }}
    >
      <StyledBackGroundImage>
        <StyledContainer>
          <StyledBgImg src={bg} alt="background-circle" loading="lazy" />
          <StyledBgDesktopImg
            variants={animation}
            as={motion.img}
            src={bgD}
            alt="background-circle"
            loading="lazy"
          />
          <StyledDiv>
            <StyledCircleDiv></StyledCircleDiv>
            <StyledH2>{t('form.h2')}</StyledH2>
          </StyledDiv>
          <StyledH3>{t('form.h3')}</StyledH3>
          <StyledFlexFormDesktopDiv>
            <motion.div variants={animation}>
              <Formik
                initialValues={{ name: '', number: '', checkbox: false }}
                validationSchema={schema}
                onSubmit={handleSubmit}
              >
                {({ setFieldValue }) => (
                  <Form id="form">
                    <StyledFormDiv>
                      <StyledLabel htmlFor="name">
                        {t('form.labels.0')}{' '}
                      </StyledLabel>
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
                      <StyledLabel htmlFor="number">
                        {t('form.labels.1')}
                      </StyledLabel>
                      <StyledBorderNumber></StyledBorderNumber>
                      <StyledSvg width="22" height="22">
                        <use href={`${sprite}#icon-call-yellow-outline`}></use>
                      </StyledSvg>
                      <StyledField
                        name="number"
                        id="number"
                        type="tel"
                        placeholder="+380 XXX XX XX XX"
                        autoComplete="off"
                        onChange={e => {
                          const formattedNumber = formatPhoneNumber(
                            e.target.value
                          );
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
                )}
              </Formik>
            </motion.div>
            <StyledFlexDiv as={motion.div} variants={animationRight}>
              <StyledLineDiv></StyledLineDiv>
              <div>
                <StyledP>{t('form.p')}</StyledP>
                <StyledLink href="tel:050 936 34 00">050 936 34 00</StyledLink>
              </div>
            </StyledFlexDiv>
          </StyledFlexFormDesktopDiv>
        </StyledContainer>
      </StyledBackGroundImage>
    </motion.section>
  );
};

export default SectionForm;
