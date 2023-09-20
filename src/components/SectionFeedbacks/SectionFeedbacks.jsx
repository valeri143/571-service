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

export const SectionFeedbacks = ({ content }) => {
  return (
    <section>
      <StyledContainer>
        <StyledDiv>
          <StyledCircleDiv></StyledCircleDiv>
          <StyledH2>{content.h2}</StyledH2>
        </StyledDiv>
        <StyledH3>
          {content.h3[0]}
          <StyledSpan>{content.h3[1]}</StyledSpan>
        </StyledH3>
        <StyledP>{content.p}</StyledP>

        <StyledSwiperDiv>
          <swiper-container
            slides-per-view="1"
            speed="500"
            loop="true"
            space-between="20px"
          >
            <swiper-slide>
              <FeedbacksItem
                h4={content.feedbacks[0][0]}
                paragraph={content.feedbacks[0][1]}
                name={content.feedbacks[0][2]}
                starsRating="icon-rating"
                rating="5.0"
              />
            </swiper-slide>
            <swiper-slide>
              <FeedbacksItem
                h4={content.feedbacks[1][0]}
                paragraph={content.feedbacks[1][1]}
                name={content.feedbacks[1][2]}
                starsRating="icon-rating"
                rating="5.0"
              />
            </swiper-slide>
            <swiper-slide>
              <FeedbacksItem
                h4={content.feedbacks[2][0]}
                paragraph={content.feedbacks[2][1]}
                name={content.feedbacks[2][2]}
                starsRating="icon-rating"
                rating="5.0"
              />
            </swiper-slide>
            <swiper-slide>
              <FeedbacksItem
                h4={content.feedbacks[3][0]}
                paragraph={content.feedbacks[3][1]}
                name={content.feedbacks[3][2]}
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
        <StyledNavLink to={content.navLinkTo}>
          {content.buttonText}
        </StyledNavLink>
      </StyledContainer>
    </section>
  );
};
