import {
  StyledContainer,
  StyledH3,
  StyledSpan,
} from 'components/SectionServices/SectionServices.styled';
import sprite from '../../images/sprite.svg';
import {
  StyledContactsDiv,
  StyledContactsP,
  StyledContactsSvg,
  StyledContactsUl,
  StyledLink,
} from './SectionContacts.styled';

export const SectionContacts = ({ content }) => {
  return (
    <section>
      <StyledContainer style={{ paddingBottom: 0 }}>
        <StyledH3
          style={{
            marginLeft: 'auto',
            width: 266,
            marginRight: 'auto',
            textAlign: 'center',
          }}
        >
          <StyledSpan>{content.h3[0]}</StyledSpan>
          {content.h3[1]}
        </StyledH3>
        <StyledContactsUl>
          <li>
            <StyledContactsDiv>
              <StyledContactsSvg>
                <svg width="40" height="40">
                  <use href={`${sprite}#icon-call-white-outline`}></use>
                </svg>
              </StyledContactsSvg>
              <StyledContactsP>{content.actions[0]}</StyledContactsP>
              <StyledLink href="tel:050 936 34 00">050 936 34 00</StyledLink>
              <StyledLink href="tel:044 698 98 98">044 698 98 98</StyledLink>
            </StyledContactsDiv>
          </li>
          <li>
            <StyledContactsDiv>
              <StyledContactsSvg>
                <svg width="40" height="40">
                  <use href={`${sprite}#icon-email`}></use>
                </svg>
              </StyledContactsSvg>
              <StyledContactsP>{content.actions[2]}</StyledContactsP>
              <StyledLink href="mailto:info@571Service.com">
                info@571Service.com
              </StyledLink>
            </StyledContactsDiv>
          </li>
          <li>
            <StyledContactsDiv>
              <StyledContactsSvg>
                <svg width="40" height="40">
                  <use href={`${sprite}#icon-map-pin`}></use>
                </svg>
              </StyledContactsSvg>
              <StyledContactsP>{content.actions[3]}</StyledContactsP>
              <StyledLink
                href="https://maps.app.goo.gl/WCqPA8hvKJcHS3WBA"
                target="_blank"
              >
                {content.address}
              </StyledLink>
            </StyledContactsDiv>
          </li>
        </StyledContactsUl>
      </StyledContainer>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d486.67007571702607!2d30.451795823869563!3d50.411617908724374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c94a039c21a5%3A0xffd8c54cdbcac902!2z0JDQstGC0L7RgdC40LzQtdGC0YDQuNGPLCDQstGD0LvQuNGG0Y8g0KHQstGP0YLQvtGB0LvQsNCy0LAg0KXQvtGA0L7QsdGA0L7Qs9C-LCAyNiDQsCwg0JrQuNC10LIsIDAzMTUx!5e0!3m2!1suk!2sua!4v1695242069005!5m2!1suk!2sua"
        width="390"
        height="518"
        style={{ border: 0 }}
        allowFullScreen=""
        title="mobile-map"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
};
