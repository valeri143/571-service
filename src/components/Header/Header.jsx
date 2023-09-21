import { useState } from 'react';
import sprite from '../../images/sprite.svg';
import logo from '../../images/logo.svg';
import call from '../../images/call.svg';
import {
  StyledButtonDiv,
  StyledButtonP,
  StyledCircleDiv,
  StyledDiv,
  StyledHamburgerMenu,
  StyledImg,
  StyledLangButton,
  StyledLangLine,
  StyledLangUL,
  StyledMenuButton,
  StyledMenuNavLinkUl,
  StyledNavLink,
  StyledSvg,
  StyledTel,
  StyledTelDiv,
} from './Header.styled';
import { useTranslation } from 'react-i18next';
export const Header = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
  };

  return (
    <header>
      <StyledDiv>
        <div>
          <StyledImg
            src={logo}
            alt="logo"
            loading="lazy"
            width={43}
            height={38}
          />
        </div>
        <StyledMenuButton onClick={toggleMenu}>
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
                <StyledNavLink to="/services">
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
          <StyledLangUL>
            <li>
              <StyledLangButton
                type="submit"
                key="ru"
                onClick={() => i18n.changeLanguage('ru')}
                disabled={i18n.resolvedLanguage === 'ru'}
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
              >
                UA
              </StyledLangButton>
            </li>
          </StyledLangUL>
          <StyledButtonDiv>
            <StyledCircleDiv></StyledCircleDiv>
            <StyledSvg width="18" height="18">
              <use href={`${sprite}#icon-tools`}></use>
            </StyledSvg>
            <StyledButtonP>{t('header.buttonText')}</StyledButtonP>
          </StyledButtonDiv>
          <StyledTelDiv>
            <img src={call} alt="call" width={18} height={18} loading="lazy" />
            <StyledTel href="tel:050 936 34 00">050 936 34 00</StyledTel>
          </StyledTelDiv>
        </StyledHamburgerMenu>
      )}
    </header>
  );
};
