import React from 'react';
import { useTranslation } from 'react-i18next';
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
} from 'components/SectionServices/SectionServices.styled';
import {
  StyledImgBox,
  StyledContainer,
  StyledContentContainer,
  SwiperContainer,
  StyledArrowImg,
} from './SectionCertifications.styled';

const SectionCertifications = () => {
  const { t } = useTranslation();
  return (
    <section>
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
        <SwiperContainer>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={10}
            slidesPerView={1.5}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            pagination={{ clickable: false }}
            loop={true}
            centeredSlides={true}
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
          </Swiper>
          <button className="swiper-button-prev">
            <StyledArrowImg
              src={arrowSwiperPrev}
              alt="Previous"
              width={46}
              height={46}
              loading="lazy"
            />
          </button>
          <button className="swiper-button-next">
            <StyledArrowImg
              src={arrowSwiper}
              alt="Next"
              width={46}
              height={46}
              loading="lazy"
            />
          </button>
        </SwiperContainer>
      </StyledContainer>
    </section>
  );
};

export default SectionCertifications;
