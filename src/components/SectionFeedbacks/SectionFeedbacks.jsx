import { useTranslation } from 'react-i18next';
import { FeedbacksItem } from 'components/FeedbacksItem/FeedbacksItem';
import { StyledContainer } from 'components/Hero/Hero.styled';
import {
  StyledCircleDiv,
  StyledDiv,
  StyledH2,
  StyledH3,
  StyledP,
  StyledSpan,
} from 'components/SectionServices/SectionServices.styled';
import arrowSwiper from '../../images/arrow-swiper.svg';

import {
  StyledNavLink,
  StyledSwiperButton,
  StyledSwiperDiv,
} from './SectionFeedbacks.styled';
import { register } from 'swiper/element/bundle';

register();

const SectionFeedbacks = () => {
  const { t } = useTranslation();
  return (
    <section>
      <StyledContainer>
        <StyledDiv>
          <StyledCircleDiv></StyledCircleDiv>
          <StyledH2>{t('header.navLinksList.1')}</StyledH2>
        </StyledDiv>
        <StyledH3>
          {t('feedbacks.h3.0')}
          <StyledSpan> {t('feedbacks.h3.1')}</StyledSpan>
        </StyledH3>
        <StyledP> {t('feedbacks.p')}</StyledP>

        <StyledSwiperDiv>
          <swiper-container
            slides-per-view="1"
            speed="500"
            loop="true"
            space-between="20px"
          >
            <swiper-slide>
              <FeedbacksItem
                h4={t('feedbacks.feedbacks.0.0')}
                paragraph={t('feedbacks.feedbacks.0.1')}
                name={t('feedbacks.feedbacks.0.2')}
                starsRating="icon-rating"
                rating="5.0"
              />
            </swiper-slide>
            <swiper-slide>
              <FeedbacksItem
                h4={t('feedbacks.feedbacks.1.0')}
                paragraph={t('feedbacks.feedbacks.1.1')}
                name={t('feedbacks.feedbacks.1.2')}
                starsRating="icon-rating"
                rating="5.0"
              />
            </swiper-slide>
            <swiper-slide>
              <FeedbacksItem
                h4={t('feedbacks.feedbacks.2.0')}
                paragraph={t('feedbacks.feedbacks.2.1')}
                name={t('feedbacks.feedbacks.2.2')}
                starsRating="icon-rating"
                rating="5.0"
              />
            </swiper-slide>
            <swiper-slide>
              <FeedbacksItem
                h4={t('feedbacks.feedbacks.3.0')}
                paragraph={t('feedbacks.feedbacks.3.1')}
                name={t('feedbacks.feedbacks.3.2')}
                starsRating="icon-rating"
                rating="5.0"
              />
            </swiper-slide>
          </swiper-container>
          <StyledSwiperButton type="button">
            <img
              src={arrowSwiper}
              alt="arrow-button"
              width={46}
              height={46}
              onClick={() =>
                document.querySelector('swiper-container').swiper.slideNext()
              }
              loading="lazy"
            />
          </StyledSwiperButton>
        </StyledSwiperDiv>
        <StyledNavLink to="feedbacks">
          {t('feedbacks.buttonText')}
        </StyledNavLink>
      </StyledContainer>
    </section>
  );
};

export default SectionFeedbacks;
