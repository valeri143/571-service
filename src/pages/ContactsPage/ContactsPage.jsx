import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Formik, ErrorMessage, Form } from 'formik';
import { phoneInputHandler } from 'helpers/phoneUaInput';
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
// import { sendEmail } from 'helpers/sendEmail';
const ContactsPage = () => {
  const { t } = useTranslation();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = async ({ name, number }, { resetForm }) => {
    setFormSubmitted(true);
    // sending data
    // try {
    //   await sendEmail({
    //     name,
    //     number,
    //   });
    //   setFormSubmitted(true);
    // } catch (error) {
    //   console.log(error);
    // }

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
                    <StyledLink href="mailto:sto@571.com.ua">
                      sto@571.com.ua
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
                        063 527 15 19
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
                        <StyledLightSpan>Пн- Пт</StyledLightSpan>с 09:00-18:00
                      </StyledP>
                      <StyledP>
                        <StyledLightSpan>Сб-Вс</StyledLightSpan>с 09:00-16:00
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
                <Form>
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
            </StyledFormikContactsDiv>
          </StyledFlexContactsDesktopDiv>
        </StyledContainer>
      </section>
      <section>
        <StyledContainer style={{ padding: 0 }}>
          <IframeMob
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.0024756477546!2d30.631496676256194!3d50.45967858669968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4daabb5c2eced%3A0x7d7bbb92bdff9e34!2z0LLRg9C70LjRhtGPINCT0LXRgtGM0LzQsNC90LAg0J_QsNCy0LvQsCDQn9C-0LvRg9Cx0L7RgtC60LAsIDUy0JEsINCa0LjRl9CyLCAwMjAwMA!5e0!3m2!1sru!2sua!4v1695732665981!5m2!1sru!2sua"
            width="390"
            height="518"
            style={{ border: 0 }}
            allowFullScreen=""
            title="mobile-map"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></IframeMob>
          <IframeTab
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.0024756477546!2d30.631496676256194!3d50.45967858669968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4daabb5c2eced%3A0x7d7bbb92bdff9e34!2z0LLRg9C70LjRhtGPINCT0LXRgtGM0LzQsNC90LAg0J_QsNCy0LvQsCDQn9C-0LvRg9Cx0L7RgtC60LAsIDUy0JEsINCa0LjRl9CyLCAwMjAwMA!5e0!3m2!1sru!2sua!4v1695732665981!5m2!1sru!2sua"
            width="768"
            height="518"
            style={{ border: 0 }}
            allowFullScreen=""
            title="table-map"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></IframeTab>
          <IframeDesk
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.0024756477546!2d30.631496676256194!3d50.45967858669968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4daabb5c2eced%3A0x7d7bbb92bdff9e34!2z0LLRg9C70LjRhtGPINCT0LXRgtGM0LzQsNC90LAg0J_QsNCy0LvQsCDQn9C-0LvRg9Cx0L7RgtC60LAsIDUy0JEsINCa0LjRl9CyLCAwMjAwMA!5e0!3m2!1sru!2sua!4v1695732665981!5m2!1sru!2sua"
            width="1512"
            height="518"
            style={{ border: 0 }}
            allowFullScreen=""
            title="desktop-map"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></IframeDesk>
        </StyledContainer>
      </section>
    </>
  );
};
export default ContactsPage;
