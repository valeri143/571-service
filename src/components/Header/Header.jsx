import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import sprite from '../../images/sprite.svg';
import logo from '../../images/logo.svg';
import call from '../../images/call.svg';
import service0101x from '../../images/desktop/header/car-service-link@1x-min.png';
import service0102x from '../../images/desktop/header/car-service-link@2x-min.png';
import service0201x from '../../images/desktop/header/car-wash-service-link@1x-min.png';
import service0202x from '../../images/desktop/header/car-wash-service-link@2x-min.png';
import service0301x from '../../images/desktop/header/car-tire-service-link@1x-min.png';
import service0302x from '../../images/desktop/header/car-tire-service-link@2x-min.png';
import {
  StyledButtonDiv,
  StyledButtonP,
  StyledCircleDiv,
  StyledDiv,
  StyledFlexHeaderDiv,
  StyledHamburgerMenu,
  StyledHeader,
  StyledImg,
  StyledLangButton,
  StyledLangDiv,
  StyledLangLine,
  StyledLangUL,
  StyledMenuButton,
  StyledMenuNavLinkUl,
  StyledNavLink,
  StyledServiceMenu,
  StyledServiceMenuDiv,
  StyledServiceMenuP,
  StyledServiceMenuUl,
  StyledSvg,
  StyledTel,
  StyledTelDiv,
  StyledTelImg,
} from './Header.styled';
import { useTranslation } from 'react-i18next';
export const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSeviceMenuOpen, setIsServiceMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
  };
  const toggleServiceMenu = () => {
    setIsServiceMenuOpen(!isSeviceMenuOpen);
  };

  return (
    <StyledHeader
      style={{
        backgroundColor:
          location.pathname === '/contacts' ||
          location.pathname === '/feedbacks' ||
          location.pathname === '/blog' ||
          location.pathname === '/blog/modern-car-service' ||
          location.pathname === '/vacancies'
            ? 'rgba(71, 71, 71, 1)'
            : 'rgba(71, 71, 71, 0.5)',
      }}
    >
      <StyledDiv>
        <div>
          <StyledImg
            src={logo}
            alt="logo"
            loading="lazy"
            width={43}
            height={38}
            onClick={() => navigate('/')}
          />
        </div>
        <StyledFlexHeaderDiv>
          <nav>
            <StyledMenuNavLinkUl>
              <li>
                <StyledNavLink onClick={toggleServiceMenu}>
                  {t('header.navLinksList.0')}
                </StyledNavLink>
              </li>
              <li>
                <StyledNavLink to="/feedbacks">
                  {t('header.navLinksList.1')}
                </StyledNavLink>
              </li>
              <li>
                <StyledNavLink to="/blog">
                  {t('header.navLinksList.2')}
                </StyledNavLink>
              </li>
              <li>
                <StyledNavLink to="/vacancies">
                  {t('header.navLinksList.3')}
                </StyledNavLink>
              </li>
              <li>
                <StyledNavLink to="/contacts">
                  {t('header.navLinksList.4')}
                </StyledNavLink>
              </li>
            </StyledMenuNavLinkUl>
          </nav>
          <StyledLangDiv>
            <StyledLangUL>
              <li>
                <StyledLangButton
                  type="submit"
                  key="ru"
                  onClick={() => i18n.changeLanguage('ru')}
                  disabled={i18n.resolvedLanguage === 'ru'}
                  className={currentLanguage === 'ru' ? 'active' : 'unactive'}
                >
                  RU
                </StyledLangButton>
              </li>
              <li>
                <StyledLangLine></StyledLangLine>
              </li>
              <li>
                <StyledLangButton
                  type="submit"
                  key="ua"
                  onClick={() => i18n.changeLanguage('ua')}
                  disabled={i18n.resolvedLanguage === 'ua'}
                  className={currentLanguage === 'ua' ? 'active' : 'unactive'}
                >
                  UA
                </StyledLangButton>
              </li>
            </StyledLangUL>
            <StyledTelDiv>
              <StyledTelImg
                src={call}
                alt="call"
                width={18}
                height={18}
                loading="lazy"
              />
              <StyledTel href="tel:050 936 34 00">050 936 34 00</StyledTel>
            </StyledTelDiv>
          </StyledLangDiv>
        </StyledFlexHeaderDiv>

        <StyledMenuButton
          onClick={toggleMenu}
          type="button"
          aria-label="Открыть меню"
        >
          {!isMenuOpen && (
            <svg width="40" height="23">
              <use href={`${sprite}#icon-header-menu`}></use>
            </svg>
          )}
          {isMenuOpen && (
            <svg width="40" height="23">
              <use href={`${sprite}#icon-header-cross`}></use>
            </svg>
          )}
        </StyledMenuButton>
      </StyledDiv>
      {isMenuOpen && (
        <StyledHamburgerMenu>
          <nav>
            <StyledMenuNavLinkUl>
              <li>
                <StyledNavLink to="/#services" onClick={toggleMenu}>
                  {t('header.navLinksList.0')}
                </StyledNavLink>
              </li>
              <li>
                <StyledNavLink to="/feedbacks" onClick={toggleMenu}>
                  {t('header.navLinksList.1')}
                </StyledNavLink>
              </li>
              <li>
                <StyledNavLink to="/blog" onClick={toggleMenu}>
                  {t('header.navLinksList.2')}
                </StyledNavLink>
              </li>
              <li>
                <StyledNavLink to="/vacancies" onClick={toggleMenu}>
                  {t('header.navLinksList.3')}
                </StyledNavLink>
              </li>
              <li>
                <StyledNavLink to="/contacts" onClick={toggleMenu}>
                  {t('header.navLinksList.4')}
                </StyledNavLink>
              </li>
            </StyledMenuNavLinkUl>
          </nav>
          <StyledLangUL>
            <li>
              <StyledLangButton
                type="submit"
                key="ru"
                onClick={() => i18n.changeLanguage('ru')}
                disabled={i18n.resolvedLanguage === 'ru'}
                className={currentLanguage === 'ru' ? 'active' : 'unactive'}
              >
                RU
              </StyledLangButton>
            </li>
            <li>
              <StyledLangLine></StyledLangLine>
            </li>
            <li>
              <StyledLangButton
                type="submit"
                key="ua"
                onClick={() => i18n.changeLanguage('ua')}
                disabled={i18n.resolvedLanguage === 'ua'}
                className={currentLanguage === 'ua' ? 'active' : 'unactive'}
              >
                UA
              </StyledLangButton>
            </li>
          </StyledLangUL>
          <StyledButtonDiv onClick={toggleMenu}>
            <StyledCircleDiv></StyledCircleDiv>
            <StyledSvg width="18" height="18">
              <use href={`${sprite}#icon-tools`}></use>
            </StyledSvg>
            <StyledButtonP href="#form">{t('header.buttonText')}</StyledButtonP>
          </StyledButtonDiv>
          <StyledTelDiv>
            <img src={call} alt="call" width={18} height={18} loading="lazy" />
            <StyledTel href="tel:050 936 34 00">050 936 34 00</StyledTel>
          </StyledTelDiv>
        </StyledHamburgerMenu>
      )}
      {isSeviceMenuOpen && (
        <StyledServiceMenu>
          <StyledServiceMenuUl>
            <li>
              <StyledServiceMenuDiv onClick={() => navigate('/car-service')}>
                <StyledServiceMenuP>
                  {t('footer.navLinksTitles.0')}
                </StyledServiceMenuP>
                <img
                  srcSet={`${service0101x} 1x, ${service0102x} 2x`}
                  src={service0101x}
                  alt="car-service-link"
                  loading="lazy"
                  width={175}
                  height={97}
                />
              </StyledServiceMenuDiv>
            </li>
            <li>
              <StyledServiceMenuDiv
                onClick={() => navigate('/car-wash-service')}
              >
                <StyledServiceMenuP>
                  {t('hero.animationText.0')}
                </StyledServiceMenuP>
                <img
                  srcSet={`${service0201x} 1x, ${service0202x} 2x`}
                  src={service0201x}
                  alt="car-wash-service-link"
                  loading="lazy"
                  width={175}
                  height={97}
                />
              </StyledServiceMenuDiv>
            </li>
            <li>
              <StyledServiceMenuDiv
                onClick={() => navigate('/car-tire-service')}
              >
                <StyledServiceMenuP>
                  {t('hero.animationText.1')}
                </StyledServiceMenuP>
                <img
                  srcSet={`${service0301x} 1x, ${service0302x} 2x`}
                  src={service0301x}
                  alt="car-tire-service-link"
                  loading="lazy"
                  width={175}
                  height={97}
                />
              </StyledServiceMenuDiv>
            </li>
          </StyledServiceMenuUl>
        </StyledServiceMenu>
      )}
    </StyledHeader>
  );
};
