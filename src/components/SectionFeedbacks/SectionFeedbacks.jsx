import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { animation } from '../Hero/Hero';
import { FeedbacksItem } from 'components/FeedbacksItem/FeedbacksItem';
import {
  StyledContainer,
  StyledUnderlineSpan,
} from './SectionFeedbacks.styled';
import {
  StyledCircleDiv,
  StyledDiv,
  StyledH2,
  StyledP,
  StyledSpan,
} from 'components/SectionServices/SectionServices.styled';
import arrowSwiper from '../../images/arrow-swiper.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import {
  StyledNavLink,
  StyledSwiperButton,
  StyledH3,
} from './SectionFeedbacks.styled';
import { StyledContentContainer } from 'components/SectionCertifications/SectionCertifications.styled';

const SectionFeedbacks = () => {
  const { t, i18n } = useTranslation();
  const getSlidesPerView = () => {
    if (window.innerWidth >= 768 && window.innerWidth < 1512) {
      return 2;
    } else if (window.innerWidth >= 1512) {
      return 3.5;
    } else {
      return 1;
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
            <StyledH2>{t('header.navLinksList.1')}</StyledH2>
          </StyledDiv>
          <StyledH3>
            {t('feedbacks.h3.0')}
            <StyledSpan> {t('feedbacks.h3.1')}</StyledSpan>
          </StyledH3>
          <StyledP> {t('feedbacks.p')}</StyledP>
        </StyledContentContainer>
        <motion.div variants={animation}>
          <Swiper
            slidesPerView={getSlidesPerView()}
            modules={[Navigation]}
            navigation={{
              nextEl: '.swiper-button-next-element',
            }}
            loop={true}
            speed="500"
            spaceBetween={20}
            centeredSlides={true}
            watchSlidesProgress={true}
          >
            <SwiperSlide className="my-slide">
              <FeedbacksItem
                h4={t('feedbacks.feedbacks.0.0')}
                paragraph={t('feedbacks.feedbacks.0.1')}
                name={t('feedbacks.feedbacks.0.2')}
                starsRating="icon-rating"
                rating="5.0"
              />
            </SwiperSlide>
            <SwiperSlide className="my-slide">
              <FeedbacksItem
                h4={t('feedbacks.feedbacks.1.0')}
                paragraph={t('feedbacks.feedbacks.1.1')}
                name={t('feedbacks.feedbacks.1.2')}
                starsRating="icon-rating"
                rating="5.0"
              />
            </SwiperSlide>
            <SwiperSlide className="my-slide">
              <FeedbacksItem
                h4={t('feedbacks.feedbacks.2.0')}
                paragraph={t('feedbacks.feedbacks.2.1')}
                name={t('feedbacks.feedbacks.2.2')}
                starsRating="icon-rating"
                rating="5.0"
              />
            </SwiperSlide>
            <SwiperSlide className="my-slide">
              <FeedbacksItem
                h4={t('feedbacks.feedbacks.3.0')}
                paragraph={t('feedbacks.feedbacks.3.1')}
                name={t('feedbacks.feedbacks.3.2')}
                starsRating="icon-rating"
                rating="5.0"
              />
            </SwiperSlide>
            <SwiperSlide className="my-slide">
              <FeedbacksItem
                h4={t('feedbacks.feedbacks.3.0')}
                paragraph={t('feedbacks.feedbacks.3.1')}
                name={t('feedbacks.feedbacks.3.2')}
                starsRating="icon-rating"
                rating="5.0"
              />
            </SwiperSlide>
            <SwiperSlide className="my-slide">
              <FeedbacksItem
                h4={t('feedbacks.feedbacks.2.0')}
                paragraph={t('feedbacks.feedbacks.2.1')}
                name={t('feedbacks.feedbacks.2.2')}
                starsRating="icon-rating"
                rating="5.0"
              />
            </SwiperSlide>
            <SwiperSlide className="my-slide">
              <FeedbacksItem
                h4={t('feedbacks.feedbacks.2.0')}
                paragraph={t('feedbacks.feedbacks.2.1')}
                name={t('feedbacks.feedbacks.2.2')}
                starsRating="icon-rating"
                rating="5.0"
              />
            </SwiperSlide>
            <SwiperSlide className="my-slide">
              <FeedbacksItem
                h4={t('feedbacks.feedbacks.3.0')}
                paragraph={t('feedbacks.feedbacks.3.1')}
                name={t('feedbacks.feedbacks.3.2')}
                starsRating="icon-rating"
                rating="5.0"
              />
            </SwiperSlide>
          </Swiper>
          <StyledSwiperButton
            type="button"
            className="swiper-button-next-element"
          >
            <img
              src={arrowSwiper}
              alt="arrow-button"
              width={46}
              height={46}
              loading="lazy"
            />
          </StyledSwiperButton>
        </motion.div>
        <StyledNavLink to={`/${i18n.language}/feedbacks`}>
          <StyledUnderlineSpan>
            {t('feedbacks.buttonText.0')}
          </StyledUnderlineSpan>
          {t('feedbacks.buttonText.1')}
        </StyledNavLink>
      </StyledContainer>
    </motion.section>
  );
};

export default SectionFeedbacks;
