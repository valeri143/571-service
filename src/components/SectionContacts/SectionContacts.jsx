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
              <StyledLink href="tel:044 698 98 98">044 698 98 98</StyledLink>
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
              <StyledLink href="mailto:info@571Service.com">
                info@571Service.com
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
    </motion.section>
  );
};

export default SectionContacts;
