import { useNavigate } from 'react-router-dom';
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
  StyledNavLinkUl,
  StyledNavUL,
  StyledP,
  StyledSvg,
  StyledSvgUp,
  StyledTel,
  StyledTelDiv,
  StyledTelUnderDiv,
} from './Header.styled';
import { StyledBackGroundImage } from './Header.styled';
export const Header = ({ content }) => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
  };

  return (
    <header>
      <StyledBackGroundImage>
        <StyledDiv>
          <div>
            <StyledImg src={logo} alt="logo" loading="lazy" />
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
          {/* <nav>
          <StyledNavUL>
            <li>
              <a href="#hero">{content.nav[0]}</a>
            </li>
            <li>
              <a href="#services">{content.nav[1]}</a>
            </li>
            <li>
              <a href="#feedbacks">{content.nav[2]}</a>
            </li>
            <li>
              <a href="#blog">{content.nav[3]}</a>
            </li>
            <li>
              <a href="#vacancies">{content.nav[4]}</a>
            </li>
            <li>
              <a href="#contacts">{content.nav[5]}</a>
            </li>
          </StyledNavUL>
        </nav> */}
          {/* <StyledTelDiv>
          <svg width="18" height="18">
            <use href={`${sprite}#icon-phone-white`}></use>
          </svg>
          <StyledTel href="tel:050 936 34 00">050 936 34 00</StyledTel>
        </StyledTelDiv>
        <StyledLangUL>
          <li>
            <StyledLangButton
              type="button"
              onClick={() => navigate(content.navigateTo[0])}
            >
              {content.lang[0]}
            </StyledLangButton>
          </li>
          <li>
            <StyledLangButton
              type="button"
              onClick={() => navigate(content.navigateTo[1])}
            >
              {content.lang[1]}
            </StyledLangButton>
          </li>
        </StyledLangUL> */}
        </StyledDiv>
      </StyledBackGroundImage>
      {isMenuOpen && (
        <StyledHamburgerMenu>
          <nav>
            <StyledMenuNavLinkUl>
              <li>
                <StyledNavLink to="/services">{content.nav[0]}</StyledNavLink>
              </li>
              <li>
                <StyledNavLink to="/feedbacks">{content.nav[1]}</StyledNavLink>
              </li>
              <li>
                <StyledNavLink to="/blog">{content.nav[2]}</StyledNavLink>
              </li>
              <li>
                <StyledNavLink to="/vacancies">{content.nav[3]}</StyledNavLink>
              </li>
              <li>
                <StyledNavLink to="/contacts">{content.nav[4]}</StyledNavLink>
              </li>
            </StyledMenuNavLinkUl>
          </nav>
          <StyledLangUL>
            <li>
              <StyledLangButton type="button" onClick={() => navigate('/')}>
                RU
              </StyledLangButton>
            </li>
            <li>
              <StyledLangLine></StyledLangLine>
            </li>
            <li>
              <StyledLangButton type="button" onClick={() => navigate('/ua')}>
                UA
              </StyledLangButton>
            </li>
          </StyledLangUL>
          <StyledButtonDiv>
            <StyledCircleDiv></StyledCircleDiv>
            <StyledSvg width="18" height="18">
              <use href={`${sprite}#icon-tools`}></use>
            </StyledSvg>
            <StyledButtonP>{content.buttonText}</StyledButtonP>
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
