import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import arrowSwiper from '../../images/arrow-swiper.svg';
import arrowSwiperPrev from '../../images/arrow-swiper-prev.svg';
import certififcate0101x from '../../images/certifications/certificate01@1x-min.jpg';
import certififcate0102x from '../../images/certifications/certificate01@2x-min.jpg';
import certififcate0201x from '../../images/certifications/certificate02@1x-min.jpg';
import certififcate0202x from '../../images/certifications/certificate02@2x-min.jpg';
import certififcate0301x from '../../images/certifications/certificate03@1x-min.jpg';
import certififcate0302x from '../../images/certifications/certificate03@2x-min.jpg';
import certififcate0401x from '../../images/certifications/certificate04@1x-min.jpg';
import certififcate0402x from '../../images/certifications/certificate04@2x-min.jpg';

import {
  StyledCircleDiv,
  StyledDiv,
  StyledH2,
  StyledH3,
  StyledP,
  StyledSpan,
} from 'components/SectionAbout/SectionAbout.styled';
import {
  StyledImgBox,
  StyledContainer,
  StyledContentContainer,
  SwiperContainer,
  StyledArrowImg,
  StyledArrowNext,
} from './SectionCertifications.styled';

export const animationRight = {
  hidden: {
    x: 100,
    opacity: 0,
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

export const animationButton = {
  hidden: {
    x: 100,
    opacity: 0,
    transition: {
      duration: 1,
      ease: 'easeInOut',
      delay: 1,
    },
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: 'easeInOut',
      delay: 1,
    },
  },
};

const SectionCertifications = () => {
  const { t } = useTranslation();
  const getSlidesPerView = () => {
    if (window.innerWidth >= 768 && window.innerWidth < 1512) {
      return 3;
    } else if (window.innerWidth >= 1512) {
      return 5;
    } else {
      return 1.5;
    }
  };
  return (
    <motion.section
      initial={window.innerWidth >= 1512 ? 'hidden' : 'visible'}
      whileInView="visible"
      viewport={{ amount: 0.7, once: true }}
    >
      <StyledContainer>
        <StyledContentContainer>
          <StyledDiv>
            <StyledCircleDiv></StyledCircleDiv>
            <StyledH2>{t('certifications.h2')}</StyledH2>
          </StyledDiv>
          <StyledH3>
            <StyledSpan>{t('certifications.h3.0')}</StyledSpan>
            {t('certifications.h3.1')}
          </StyledH3>
          <StyledP>{t('certifications.p')}</StyledP>
        </StyledContentContainer>
        <SwiperContainer variants={animationRight} as={motion.div}>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={10}
            slidesPerView={getSlidesPerView()}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            pagination={{ clickable: false }}
            loop={true}
            centeredSlides={window.innerWidth >= 1512 ? false : true}
          >
            <SwiperSlide>
              <StyledImgBox>
                <img
                  srcSet={`${certififcate0101x} 1x, ${certififcate0102x} 2x`}
                  src={certififcate0101x}
                  alt="certificate01"
                  width={218}
                  height={309}
                  loading="lazy"
                />
              </StyledImgBox>
            </SwiperSlide>
            <SwiperSlide>
              <StyledImgBox>
                <img
                  srcSet={`${certififcate0201x} 1x, ${certififcate0202x} 2x`}
                  src={certififcate0201x}
                  alt="certificate02"
                  width={218}
                  height={309}
                  loading="lazy"
                />
              </StyledImgBox>
            </SwiperSlide>
            <SwiperSlide>
              <StyledImgBox>
                <img
                  srcSet={`${certififcate0301x} 1x, ${certififcate0302x} 2x`}
                  src={certififcate0301x}
                  alt="certificate03"
                  width={218}
                  height={309}
                  loading="lazy"
                />
              </StyledImgBox>
            </SwiperSlide>
            <SwiperSlide>
              <StyledImgBox>
                <img
                  srcSet={`${certififcate0401x} 1x, ${certififcate0402x} 2x`}
                  src={certififcate0401x}
                  alt="certificate04"
                  width={218}
                  height={309}
                  loading="lazy"
                />
              </StyledImgBox>
            </SwiperSlide>
            <SwiperSlide>
              <StyledImgBox>
                <img
                  srcSet={`${certififcate0101x} 1x, ${certififcate0102x} 2x`}
                  src={certififcate0101x}
                  alt="certificate01"
                  width={218}
                  height={309}
                  loading="lazy"
                />
              </StyledImgBox>
            </SwiperSlide>
            <SwiperSlide>
              <StyledImgBox>
                <img
                  srcSet={`${certififcate0201x} 1x, ${certififcate0202x} 2x`}
                  src={certififcate0201x}
                  alt="certificate02"
                  width={218}
                  height={309}
                  loading="lazy"
                />
              </StyledImgBox>
            </SwiperSlide>
            <SwiperSlide>
              <StyledImgBox>
                <img
                  srcSet={`${certififcate0301x} 1x, ${certififcate0302x} 2x`}
                  src={certififcate0301x}
                  alt="certificate03"
                  width={218}
                  height={309}
                  loading="lazy"
                />
              </StyledImgBox>
            </SwiperSlide>
          </Swiper>
          <button type="button" className="swiper-button-prev">
            <StyledArrowImg
              src={arrowSwiperPrev}
              alt="Previous"
              width={46}
              height={46}
              loading="lazy"
            />
          </button>
          <button type="button" className="swiper-button-next">
            <StyledArrowImg
              src={arrowSwiper}
              alt="Previous"
              width={46}
              height={46}
              loading="lazy"
            />
          </button>
          <motion.button
            variants={animationButton}
            type="button"
            className="swiper-button-next"
            style={{
              bottom: '355px',
              right: '136px',
              zIndex: '10',
              display: window.innerWidth >= 1512 ? 'block' : 'none',
            }}
          >
            <StyledArrowNext
              src={arrowSwiper}
              alt="Next"
              width={46}
              height={46}
              loading="lazy"
            />
          </motion.button>
        </SwiperContainer>
      </StyledContainer>
    </motion.section>
  );
};

export default SectionCertifications;
