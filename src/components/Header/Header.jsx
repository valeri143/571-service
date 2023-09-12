import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import sprite from '../../images/sprite.svg';
import underline from '../../images/underline.png';
import {
  StyledDiv,
  StyledLangButton,
  StyledLangUL,
  StyledNavUL,
  StyledP,
  StyledSvgUp,
  StyledTel,
  StyledTelDiv,
  StyledTelUnderDiv,
} from './Header.styled';
import { StyledBackGroundImage } from './Header.styled';
export const Header = ({ content }) => {
  const navigate = useNavigate();
  const [isSvgVisible, setIsSvgVisible] = useState(true);

  const toggleSvgVisibility = () => {
    setIsSvgVisible(!isSvgVisible);
  };

  return (
    <header>
      <StyledBackGroundImage>
        <StyledDiv>
          <div>
            <svg width="91" height="81">
              <use href={`${sprite}#icon-logo`}></use>
            </svg>
          </div>
          <nav>
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
          </nav>
          <StyledTelDiv>
            <svg width="18" height="18">
              <use href={`${sprite}#icon-phone-white`}></use>
            </svg>
            <StyledTel href="tel:050 936 34 00">050 936 34 00</StyledTel>
            {isSvgVisible && (
              <svg width="8" height="4" onClick={toggleSvgVisibility}>
                <use href={`${sprite}#icon-arrow-down`}></use>
              </svg>
            )}
            {!isSvgVisible && (
              <StyledSvgUp width="8" height="4" onClick={toggleSvgVisibility}>
                <use href={`${sprite}#icon-arrow-down`}></use>
              </StyledSvgUp>
            )}
            {!isSvgVisible && (
              <StyledTelUnderDiv>
                <StyledP>{content.tel}</StyledP>
                <img
                  src={underline}
                  alt="underline"
                  width={105}
                  height={1}
                  loading="lazy"
                />
              </StyledTelUnderDiv>
            )}
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
          </StyledLangUL>
        </StyledDiv>
      </StyledBackGroundImage>
    </header>
  );
};
