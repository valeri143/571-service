import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Formik, ErrorMessage, Form } from 'formik';
import { formatPhoneNumber } from 'helpers/phoneUaInput';
import { Error } from 'components/Error';
import { StyledContainer } from 'components/Hero/Hero.styled';
import {
  StyledBgSvg,
  StyledContactsMarginDiv,
  StyledDiv,
  StyledFlexContactsDesktopDiv,
  StyledH1,
  StyledLightSpan,
  StyledLink,
  StyledLinkDiv,
  StyledP,
  StyledSpan,
  StyledSvgDiv,
  StyledUl,
  StyledH3,
} from './ContactsPage.styled';
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
} from 'components/SectionForm/SectionForm.styled';
import sprite from '../../images/sprite.svg';
import { schema } from 'components/CarServiceRepair/CarServiceRepairForm';
import { StyledFormikContactsDiv } from 'components/CarServiceRepair/CarServiceRepair.styled';
import {
  IframeDesk,
  IframeMob,
  IframeTab,
} from 'components/SectionContacts/SectionContacts.styled';
const ContactsPage = () => {
  const [t] = useTranslation();
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
          <StyledFlexContactsDesktopDiv>
            <StyledContactsMarginDiv>
              <StyledBgSvg width="210" height="155">
                <use href={`${sprite}#icon-bg`}></use>
              </StyledBgSvg>
              <StyledH1>
                {t('contacts.h3.0')}
                <br />
                {t('contacts.h3.1')}
              </StyledH1>
              <StyledUl>
                <li>
                  <StyledDiv>
                    <StyledSvgDiv>
                      <svg width="20" height="20">
                        <use href={`${sprite}#icon-map-pin`}></use>
                      </svg>
                    </StyledSvgDiv>
                    <StyledLink
                      href="https://maps.app.goo.gl/WCqPA8hvKJcHS3WBA"
                      target="_blank"
                    >
                      <StyledSpan>{t('contacts.addressSpan.0')}</StyledSpan>
                      {t('contacts.addressSpan.1')}
                    </StyledLink>
                  </StyledDiv>
                </li>
                <li>
                  <StyledDiv>
                    <StyledSvgDiv>
                      <svg width="20" height="20">
                        <use href={`${sprite}#icon-email`}></use>
                      </svg>
                    </StyledSvgDiv>
                    <StyledLink href="mailto:info@571Service.com">
                      info@571Service.com
                    </StyledLink>
                  </StyledDiv>
                </li>
                <li>
                  <StyledDiv>
                    <StyledSvgDiv>
                      <svg width="20" height="20">
                        <use href={`${sprite}#icon-call-white-outline`}></use>
                      </svg>
                    </StyledSvgDiv>
                    <StyledLinkDiv>
                      <StyledLink href="tel:050 936 34 00">
                        050 936 34 00
                      </StyledLink>
                      <StyledLink href="tel:044 698 98 98">
                        044 698 98 98
                      </StyledLink>
                    </StyledLinkDiv>
                  </StyledDiv>
                </li>
                <li>
                  <StyledDiv>
                    <StyledSvgDiv>
                      <svg width="20" height="20">
                        <use href={`${sprite}#icon-time`}></use>
                      </svg>
                    </StyledSvgDiv>
                    <div>
                      <StyledP>
                        <StyledLightSpan>Пн- Пт</StyledLightSpan>с 9:00-22:00
                      </StyledP>
                      <StyledP>
                        <StyledLightSpan>Сб-Вс</StyledLightSpan>с 9:00-22:00
                      </StyledP>
                    </div>
                  </StyledDiv>
                </li>
              </StyledUl>
            </StyledContactsMarginDiv>
            <StyledFormikContactsDiv>
              <StyledH3>{t('form.h3')}</StyledH3>
              <Formik
                initialValues={{ name: '', number: '', checkbox: false }}
                validationSchema={schema}
                onSubmit={handleSubmit}
              >
                {({ setFieldValue }) => (
                  <Form>
                    <StyledFormDiv>
                      <StyledLabel htmlFor="name">
                        {t('form.labels.0')}{' '}
                      </StyledLabel>
                      <StyledBorder></StyledBorder>
                      <StyledSvg
                        width="22"
                        height="22"
                        style={{ left: '26px' }}
                      >
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
                      <StyledSvg
                        width="22"
                        height="22"
                        style={{ left: '26px' }}
                      >
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
            </StyledFormikContactsDiv>
          </StyledFlexContactsDesktopDiv>
        </StyledContainer>
      </section>
      <section>
        <StyledContainer style={{ padding: 0 }}>
          <IframeMob
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d486.67007571702607!2d30.451795823869563!3d50.411617908724374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c94a039c21a5%3A0xffd8c54cdbcac902!2z0JDQstGC0L7RgdC40LzQtdGC0YDQuNGPLCDQstGD0LvQuNGG0Y8g0KHQstGP0YLQvtGB0LvQsNCy0LAg0KXQvtGA0L7QsdGA0L7Qs9C-LCAyNiDQsCwg0JrQuNC10LIsIDAzMTUx!5e0!3m2!1suk!2sua!4v1695242069005!5m2!1suk!2sua"
            width="390"
            height="518"
            style={{ border: 0 }}
            allowFullScreen=""
            title="mobile-map"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></IframeMob>
          <IframeTab
            title="table-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d635.644582079523!2d30.451261469624175!3d50.41169565286562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c94a039c21a5%3A0xffd8c54cdbcac902!2z0JDQstGC0L7RgdC40LzQtdGC0YDQuNGPLCDQstGD0LvQuNGG0Y8g0KHQstGP0YLQvtGB0LvQsNCy0LAg0KXQvtGA0L7QsdGA0L7Qs9C-LCAyNiDQsCwg0JrQuNC10LIsIDAzMTUx!5e0!3m2!1suk!2sua!4v1695418086590!5m2!1suk!2sua"
            width="768"
            height="518"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></IframeTab>
          <IframeDesk
            title="desktop-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2542.49886502828!2d30.447006076253476!3d50.4131763900472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c94bccadbc9f%3A0x38ec924d0e91bf56!2z0LLRg9C70LjRhtGPINCh0LLRj9GC0L7RgdC70LDQstCwINCl0L7RgNC-0LHRgNC-0LPQviwgMjbQkCwg0JrQuNGX0LIsIDAyMDAw!5e0!3m2!1suk!2sua!4v1695516707728!5m2!1suk!2sua"
            width="1512"
            height="518"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></IframeDesk>
        </StyledContainer>
      </section>
    </>
  );
};
export default ContactsPage;
