import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { animation } from '../Hero/Hero';
import {
  StyledContainer,
  StyledSpan,
} from 'components/SectionServices/SectionServices.styled';
import sprite from '../../images/sprite.svg';
import {
  StyledH3,
  IframeMob,
  IframeTab,
  StyledContactsDiv,
  StyledContactsP,
  StyledContactsSvg,
  StyledContactsUl,
  StyledLink,
  StyledOrderLi,
  IframeDesk,
} from './SectionContacts.styled';
const SectionContacts = () => {
  const { t } = useTranslation();
  return (
    <motion.section
      initial={window.innerWidth >= 1512 ? 'hidden' : 'visible'}
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
    >
      <h2 hidden>contacts</h2>
      <StyledContainer style={{ paddingBottom: 0 }}>
        <StyledH3>
          <StyledSpan>{t('contacts.h3.0')}</StyledSpan>
          {t('contacts.h3.1')}
        </StyledH3>
        <StyledContactsUl variants={animation} as={motion.ul}>
          <li>
            <StyledContactsDiv>
              <StyledContactsSvg>
                <svg width="40" height="40">
                  <use href={`${sprite}#icon-call-white-outline`}></use>
                </svg>
              </StyledContactsSvg>
              <StyledContactsP>{t('contacts.actions.0')}</StyledContactsP>
              <StyledLink href="tel:050 936 34 00">050 936 34 00</StyledLink>
              <StyledLink href="tel:044 698 98 98">063 527 15 19</StyledLink>
            </StyledContactsDiv>
          </li>
          <StyledOrderLi>
            <StyledContactsDiv>
              <StyledContactsSvg>
                <svg width="40" height="40">
                  <use href={`${sprite}#icon-email`}></use>
                </svg>
              </StyledContactsSvg>
              <StyledContactsP>{t('contacts.actions.1')}</StyledContactsP>
              <StyledLink href="mailto:sto@571.com.ua">
                sto@571.com.ua
              </StyledLink>
            </StyledContactsDiv>
          </StyledOrderLi>
          <li>
            <StyledContactsDiv>
              <StyledContactsSvg>
                <svg width="40" height="40">
                  <use href={`${sprite}#icon-map-pin`}></use>
                </svg>
              </StyledContactsSvg>
              <StyledContactsP>{t('contacts.actions.2')}</StyledContactsP>
              <StyledLink
                href="https://maps.app.goo.gl/WCqPA8hvKJcHS3WBA"
                target="_blank"
              >
                {t('contacts.address')}
              </StyledLink>
            </StyledContactsDiv>
          </li>
        </StyledContactsUl>
      </StyledContainer>
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
    </motion.section>
  );
};

export default SectionContacts;
