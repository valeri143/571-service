import {
  StyledContainer,
  StyledBackGroundImage,
  StyledH2,
  StyledP,
  StyledImgBox,
  StyledButton,
  StyledDiv,
} from './SectionCertifications.styled';
import certificate01 from '../../images/certifications/certificate01.jpg';
import certificate02 from '../../images/certifications/certificate02.jpg';
import certificate03 from '../../images/certifications/certificate03.jpg';
import certificate04 from '../../images/certifications/certificate04.jpg';
import sprite from '../../images/sprite.svg';

import { register } from 'swiper/element/bundle';

register();

export const SectionCertifications = ({ content }) => {
  return (
    <section>
      <StyledBackGroundImage>
        <StyledContainer>
          <StyledH2>{content.h2}</StyledH2>
          <StyledP>{content.p}</StyledP>
          <swiper-container
            slides-per-view="4"
            speed="500"
            loop="true"
            css-mode="true"
            space-between="30px"
          >
            <swiper-slide>
              <StyledImgBox>
                <img
                  src={certificate01}
                  alt="certificate"
                  loading="lazy"
                  width={250}
                  height={320}
                />
              </StyledImgBox>
            </swiper-slide>
            <swiper-slide>
              <StyledImgBox>
                <img
                  src={certificate02}
                  alt="certificate"
                  loading="lazy"
                  width={250}
                  height={320}
                />
              </StyledImgBox>
            </swiper-slide>
            <swiper-slide>
              <StyledImgBox>
                <img
                  src={certificate03}
                  alt="certificate"
                  loading="lazy"
                  width={250}
                  height={320}
                />
              </StyledImgBox>
            </swiper-slide>
            <swiper-slide>
              <StyledImgBox>
                <img
                  src={certificate04}
                  alt="certificate"
                  loading="lazy"
                  width={250}
                  height={320}
                />
              </StyledImgBox>
            </swiper-slide>
            {/* 2-part */}
            <swiper-slide>
              <StyledImgBox>
                <img
                  src={certificate01}
                  alt="certificate"
                  loading="lazy"
                  width={250}
                  height={320}
                />
              </StyledImgBox>
            </swiper-slide>
            <swiper-slide>
              <StyledImgBox>
                <img
                  src={certificate02}
                  alt="certificate"
                  loading="lazy"
                  width={250}
                  height={320}
                />
              </StyledImgBox>
            </swiper-slide>
            <swiper-slide>
              <StyledImgBox>
                <img
                  src={certificate03}
                  alt="certificate"
                  loading="lazy"
                  width={250}
                  height={320}
                />
              </StyledImgBox>
            </swiper-slide>
            <swiper-slide>
              <StyledImgBox>
                <img
                  src={certificate04}
                  alt="certificate"
                  loading="lazy"
                  width={250}
                  height={320}
                />
              </StyledImgBox>
            </swiper-slide>
          </swiper-container>
          <StyledDiv>
            <StyledButton
              type="button"
              onClick={() =>
                document.querySelector('swiper-container').swiper.slidePrev()
              }
            >
              <svg width="50" height="15">
                <use href={`${sprite}#icon-swiper-arrow-left`}></use>
              </svg>
            </StyledButton>
            <StyledButton
              type="button"
              onClick={() =>
                document.querySelector('swiper-container').swiper.slideNext()
              }
            >
              <svg width="50" height="15">
                <use href={`${sprite}#icon-swiper-arrow-right`}></use>
              </svg>
            </StyledButton>
          </StyledDiv>
        </StyledContainer>
      </StyledBackGroundImage>
    </section>
  );
};
