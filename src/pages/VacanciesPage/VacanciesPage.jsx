import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Formik, ErrorMessage } from 'formik';
import { phoneInputHandler } from 'helpers/phoneUaInput';
import { Error } from 'components/Error';
import { StyledContainer } from 'components/Hero/Hero.styled';
import {
  StyledCircleDiv,
  StyledDiv,
  StyledH2,
  StyledP,
} from 'components/SectionAbout/SectionAbout.styled';
import { lazy } from 'react';
import { StyledSpan } from '../FeedbacksPage/FeedbacksPage.styled';
import sprite from '../../images/sprite.svg';
import call from '../../images/call.svg';
import {
  StyledFeedbackBracketsSvg,
  StyledFeedbackFlexBoxDiv,
  StyledFeedbackFlexDiv,
  StyledFeedbackH4,
} from 'components/FeedbacksItem/FeedbacksItem.styled';
import {
  StyledFormH3,
  StyledFormP,
  StyledLi,
  StyledLink,
  StyledSalaryP,
  StyledVacanciesP,
  StyledH3,
  StyledUl,
  StyledFeedbackDiv,
  StyledFormikDiv,
  StyledForm,
  StyledFormDiv,
} from './VacanciesPage.styled';
import { schema } from 'components/CarServiceRepair/CarServiceRepairForm';
import {
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
} from 'components/SectionForm/SectionForm.styled';

const SectionContacts = lazy(() =>
  import('components//SectionContacts/SectionContacts')
);

const VacanciesPage = () => {
  const { t } = useTranslation();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const handleSubmit = ({ name, number }, { resetForm }) => {
    setFormSubmitted(true);
    // console.log(name, number);
    // sending data
    resetForm();
  };
  return (
    <>
      <section>
        <StyledContainer>
          <StyledDiv>
            <StyledCircleDiv></StyledCircleDiv>
            <StyledH2>{t('vacancies.h2')}</StyledH2>
          </StyledDiv>
          <StyledH3>
            {t('vacancies.h3.0')}
            <StyledSpan> {t('vacancies.h3.1')}</StyledSpan>
          </StyledH3>
          <StyledP> {t('vacancies.p')}</StyledP>
          <StyledUl>
            <li>
              <StyledFeedbackDiv>
                <StyledFeedbackH4>
                  {t('vacancies.vacancies.0')}
                </StyledFeedbackH4>
                <StyledFeedbackBracketsSvg width="23" height="21">
                  <use href={`${sprite}#icon-brackets`}></use>
                </StyledFeedbackBracketsSvg>
                <StyledVacanciesP>
                  {t('vacancies.responsibilities0.0')}
                </StyledVacanciesP>
                <ul>
                  <StyledLi>
                    <StyledVacanciesP>
                      {t('vacancies.responsibilities0.1')}
                    </StyledVacanciesP>
                  </StyledLi>
                  <StyledLi>
                    <StyledVacanciesP>
                      {t('vacancies.responsibilities0.2')}
                    </StyledVacanciesP>
                  </StyledLi>
                  <StyledLi>
                    <StyledVacanciesP>
                      {t('vacancies.responsibilities0.3')}
                    </StyledVacanciesP>
                  </StyledLi>
                  <StyledLi>
                    <StyledVacanciesP>
                      {t('vacancies.responsibilities0.4')}
                    </StyledVacanciesP>
                  </StyledLi>
                </ul>
                <StyledVacanciesP>
                  {t('vacancies.responsibilities0.5')}
                </StyledVacanciesP>
                <StyledFeedbackFlexDiv>
                  <StyledSalaryP>15 000 – 40 000 грн</StyledSalaryP>
                  <StyledFeedbackFlexBoxDiv>
                    <img
                      src={call}
                      alt="call"
                      width={18}
                      height={18}
                      loading="lazy"
                    />
                    <StyledLink href="tel:050 936 34 00">
                      050 936 34 00
                    </StyledLink>
                  </StyledFeedbackFlexBoxDiv>
                </StyledFeedbackFlexDiv>
              </StyledFeedbackDiv>
            </li>
            <li>
              <StyledFeedbackDiv>
                <StyledFeedbackH4>
                  {t('vacancies.vacancies.1')}
                </StyledFeedbackH4>
                <StyledFeedbackBracketsSvg width="23" height="21">
                  <use href={`${sprite}#icon-brackets`}></use>
                </StyledFeedbackBracketsSvg>
                <StyledVacanciesP>
                  {t('vacancies.responsibilities1.0')}
                </StyledVacanciesP>
                <ul>
                  <StyledLi>
                    <StyledVacanciesP>
                      {t('vacancies.responsibilities1.1')}
                    </StyledVacanciesP>
                  </StyledLi>
                  <StyledLi>
                    <StyledVacanciesP>
                      {t('vacancies.responsibilities1.2')}
                    </StyledVacanciesP>
                  </StyledLi>
                  <StyledLi>
                    <StyledVacanciesP>
                      {t('vacancies.responsibilities1.3')}
                    </StyledVacanciesP>
                  </StyledLi>
                  <StyledLi>
                    <StyledVacanciesP>
                      {t('vacancies.responsibilities1.4')}
                    </StyledVacanciesP>
                  </StyledLi>
                  <StyledLi>
                    <StyledVacanciesP>
                      {t('vacancies.responsibilities1.5')}
                    </StyledVacanciesP>
                  </StyledLi>
                </ul>
                <StyledFeedbackFlexDiv>
                  <StyledSalaryP>25 000 – 40 000 грн</StyledSalaryP>
                  <StyledFeedbackFlexBoxDiv>
                    <img
                      src={call}
                      alt="call"
                      width={18}
                      height={18}
                      loading="lazy"
                    />
                    <StyledLink href="tel:050 936 34 00">
                      050 936 34 00
                    </StyledLink>
                  </StyledFeedbackFlexBoxDiv>
                </StyledFeedbackFlexDiv>
              </StyledFeedbackDiv>
            </li>
            <li>
              <StyledFeedbackDiv>
                <StyledFeedbackH4>
                  {t('vacancies.vacancies.2')}
                </StyledFeedbackH4>
                <StyledFeedbackBracketsSvg width="23" height="21">
                  <use href={`${sprite}#icon-brackets`}></use>
                </StyledFeedbackBracketsSvg>
                <StyledVacanciesP>
                  {t('vacancies.responsibilities2.0')}
                </StyledVacanciesP>
                <ul>
                  <StyledLi>
                    <StyledVacanciesP>
                      {t('vacancies.responsibilities2.1')}
                    </StyledVacanciesP>
                  </StyledLi>
                  <StyledLi>
                    <StyledVacanciesP>
                      {t('vacancies.responsibilities2.2')}
                    </StyledVacanciesP>
                  </StyledLi>
                  <StyledLi>
                    <StyledVacanciesP>
                      {t('vacancies.responsibilities2.3')}
                    </StyledVacanciesP>
                  </StyledLi>
                  <StyledLi>
                    <StyledVacanciesP>
                      {t('vacancies.responsibilities2.4')}
                    </StyledVacanciesP>
                  </StyledLi>
                  <StyledLi>
                    <StyledVacanciesP>
                      {t('vacancies.responsibilities2.5')}
                    </StyledVacanciesP>
                  </StyledLi>
                  <StyledLi>
                    <StyledVacanciesP>
                      {t('vacancies.responsibilities2.6')}
                    </StyledVacanciesP>
                  </StyledLi>
                </ul>
                <StyledFeedbackFlexDiv>
                  <StyledSalaryP>15 000 – 40 000 грн</StyledSalaryP>
                  <StyledFeedbackFlexBoxDiv>
                    <img
                      src={call}
                      alt="call"
                      width={18}
                      height={18}
                      loading="lazy"
                    />
                    <StyledLink href="tel:050 936 34 00">
                      050 936 34 00
                    </StyledLink>
                  </StyledFeedbackFlexBoxDiv>
                </StyledFeedbackFlexDiv>
              </StyledFeedbackDiv>
            </li>
            <li>
              <StyledFeedbackDiv>
                <StyledFeedbackH4>
                  {t('vacancies.vacancies.0')}
                </StyledFeedbackH4>
                <StyledFeedbackBracketsSvg width="23" height="21">
                  <use href={`${sprite}#icon-brackets`}></use>
                </StyledFeedbackBracketsSvg>
                <StyledVacanciesP>
                  {t('vacancies.responsibilities0.0')}
                </StyledVacanciesP>
                <ul>
                  <StyledLi>
                    <StyledVacanciesP>
                      {t('vacancies.responsibilities0.1')}
                    </StyledVacanciesP>
                  </StyledLi>
                  <StyledLi>
                    <StyledVacanciesP>
                      {t('vacancies.responsibilities0.2')}
                    </StyledVacanciesP>
                  </StyledLi>
                  <StyledLi>
                    <StyledVacanciesP>
                      {t('vacancies.responsibilities0.3')}
                    </StyledVacanciesP>
                  </StyledLi>
                  <StyledLi>
                    <StyledVacanciesP>
                      {t('vacancies.responsibilities0.4')}
                    </StyledVacanciesP>
                  </StyledLi>
                </ul>
                <StyledVacanciesP>
                  {t('vacancies.responsibilities0.5')}
                </StyledVacanciesP>
                <StyledFeedbackFlexDiv>
                  <StyledSalaryP>15 000 – 40 000 грн</StyledSalaryP>
                  <StyledFeedbackFlexBoxDiv>
                    <img
                      src={call}
                      alt="call"
                      width={18}
                      height={18}
                      loading="lazy"
                    />
                    <StyledLink href="tel:050 936 34 00">
                      050 936 34 00
                    </StyledLink>
                  </StyledFeedbackFlexBoxDiv>
                </StyledFeedbackFlexDiv>
              </StyledFeedbackDiv>
            </li>
            <li>
              <StyledFeedbackDiv>
                <StyledFeedbackH4>
                  {t('vacancies.vacancies.1')}
                </StyledFeedbackH4>
                <StyledFeedbackBracketsSvg width="23" height="21">
                  <use href={`${sprite}#icon-brackets`}></use>
                </StyledFeedbackBracketsSvg>
                <StyledVacanciesP>
                  {t('vacancies.responsibilities1.0')}
                </StyledVacanciesP>
                <ul>
                  <StyledLi>
                    <StyledVacanciesP>
                      {t('vacancies.responsibilities1.1')}
                    </StyledVacanciesP>
                  </StyledLi>
                  <StyledLi>
                    <StyledVacanciesP>
                      {t('vacancies.responsibilities1.2')}
                    </StyledVacanciesP>
                  </StyledLi>
                  <StyledLi>
                    <StyledVacanciesP>
                      {t('vacancies.responsibilities1.3')}
                    </StyledVacanciesP>
                  </StyledLi>
                  <StyledLi>
                    <StyledVacanciesP>
                      {t('vacancies.responsibilities1.4')}
                    </StyledVacanciesP>
                  </StyledLi>
                  <StyledLi>
                    <StyledVacanciesP>
                      {t('vacancies.responsibilities1.5')}
                    </StyledVacanciesP>
                  </StyledLi>
                </ul>
                <StyledFeedbackFlexDiv>
                  <StyledSalaryP>25 000 – 40 000 грн</StyledSalaryP>
                  <StyledFeedbackFlexBoxDiv>
                    <img
                      src={call}
                      alt="call"
                      width={18}
                      height={18}
                      loading="lazy"
                    />
                    <StyledLink href="tel:050 936 34 00">
                      050 936 34 00
                    </StyledLink>
                  </StyledFeedbackFlexBoxDiv>
                </StyledFeedbackFlexDiv>
              </StyledFeedbackDiv>
            </li>
            <li>
              <StyledFeedbackDiv>
                <StyledFeedbackH4>
                  {t('vacancies.vacancies.2')}
                </StyledFeedbackH4>
                <StyledFeedbackBracketsSvg width="23" height="21">
                  <use href={`${sprite}#icon-brackets`}></use>
                </StyledFeedbackBracketsSvg>
                <StyledVacanciesP>
                  {t('vacancies.responsibilities2.0')}
                </StyledVacanciesP>
                <ul>
                  <StyledLi>
                    <StyledVacanciesP>
                      {t('vacancies.responsibilities2.1')}
                    </StyledVacanciesP>
                  </StyledLi>
                  <StyledLi>
                    <StyledVacanciesP>
                      {t('vacancies.responsibilities2.2')}
                    </StyledVacanciesP>
                  </StyledLi>
                  <StyledLi>
                    <StyledVacanciesP>
                      {t('vacancies.responsibilities2.3')}
                    </StyledVacanciesP>
                  </StyledLi>
                  <StyledLi>
                    <StyledVacanciesP>
                      {t('vacancies.responsibilities2.4')}
                    </StyledVacanciesP>
                  </StyledLi>
                  <StyledLi>
                    <StyledVacanciesP>
                      {t('vacancies.responsibilities2.5')}
                    </StyledVacanciesP>
                  </StyledLi>
                  <StyledLi>
                    <StyledVacanciesP>
                      {t('vacancies.responsibilities2.6')}
                    </StyledVacanciesP>
                  </StyledLi>
                </ul>
                <StyledFeedbackFlexDiv>
                  <StyledSalaryP>15 000 – 40 000 грн</StyledSalaryP>
                  <StyledFeedbackFlexBoxDiv>
                    <img
                      src={call}
                      alt="call"
                      width={18}
                      height={18}
                      loading="lazy"
                    />
                    <StyledLink href="tel:050 936 34 00">
                      050 936 34 00
                    </StyledLink>
                  </StyledFeedbackFlexBoxDiv>
                </StyledFeedbackFlexDiv>
              </StyledFeedbackDiv>
            </li>
          </StyledUl>
        </StyledContainer>
      </section>
      <section>
        <StyledContainer>
          <StyledFormikDiv style={{ paddingBottom: 70 }}>
            <StyledFormH3>{t('vacancies.form')}</StyledFormH3>
            <StyledFormP>{t('vacancies.formP')}</StyledFormP>
            <Formik
              initialValues={{ name: '', number: '', checkbox: false }}
              validationSchema={schema}
              onSubmit={handleSubmit}
            >
              {({ setFieldValue }) => (
                <StyledForm>
                  <StyledFormDiv>
                    <StyledLabel htmlFor="name">
                      {t('form.labels.0')}{' '}
                    </StyledLabel>
                    <StyledBorder></StyledBorder>
                    <StyledSvg width="22" height="22" style={{ left: '26px' }}>
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
                    <StyledSvg width="22" height="22" style={{ left: '26px' }}>
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
                        {t('vacancies.buttonText')}
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
                </StyledForm>
              )}
            </Formik>
          </StyledFormikDiv>
        </StyledContainer>
      </section>
      <SectionContacts />
    </>
  );
};

export default VacanciesPage;
