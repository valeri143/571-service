import React from 'react';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import {
  StyledCircleDiv,
  StyledContainer,
  StyledDiv,
  StyledH2,
  StyledH3,
  StyledSpan,
} from 'components/SectionServices/SectionServices.styled';
import { PostsItem } from 'components/PostsItem/PostsItem';
import post0101x from '../../images/posts/post01@1x-min.jpg';
import post0102x from '../../images/posts/post01@2x-min.jpg';
import post0201x from '../../images/posts/post02@1x-min.jpg';
import post0202x from '../../images/posts/post02@2x-min.jpg';
import post0301x from '../../images/posts/post03@1x-min.jpg';
import post0302x from '../../images/posts/post03@2x-min.jpg';
import arrowSwiper from '../../images/arrow-swiper.svg';

import {
  StyledSwiperButton,
  StyledNavLink,
} from 'components/SectionFeedbacks/SectionFeedbacks.styled';
const SectionBlog = () => {
  const { t } = useTranslation();
  const getSlidesPerView = () => {
    if (window.innerWidth >= 768) {
      return 2;
    } else {
      return 1;
    }
  };
  return (
    <section>
      <StyledContainer>
        <StyledDiv>
          <StyledCircleDiv></StyledCircleDiv>
          <StyledH2>{t('header.navLinksList.2')}</StyledH2>
        </StyledDiv>
        <StyledH3>
          {t('blog.h3.0')}
          <StyledSpan>{t('blog.h3.1')}</StyledSpan>
          {t('blog.h3.2')}
        </StyledH3>
        <Swiper
          spaceBetween={20}
          slidesPerView={getSlidesPerView()}
          navigation={{
            nextEl: '.swiper-button-next-el',
          }}
          loop={true}
          speed="500"
        >
          <SwiperSlide>
            <PostsItem
              post01x={post0101x}
              post02x={post0102x}
              date="10.06.2023"
              title={t('blog.posts.0.0')}
              text={t('blog.posts.0.1')}
            />
          </SwiperSlide>
          <SwiperSlide>
            <PostsItem
              post01x={post0201x}
              post02x={post0202x}
              date="09.06.2023"
              title={t('blog.posts.1.0')}
              text={t('blog.posts.1.1')}
            />
          </SwiperSlide>
          <SwiperSlide>
            <PostsItem
              post01x={post0301x}
              post02x={post0302x}
              date="10.06.2023"
              title={t('blog.posts.2.0')}
              text={t('blog.posts.2.1')}
            />
          </SwiperSlide>
        </Swiper>
        <StyledSwiperButton type="button" className="swiper-button-next-el">
          <img
            src={arrowSwiper}
            alt="arrow-button"
            width={46}
            height={46}
            loading="lazy"
          />
        </StyledSwiperButton>
        <StyledNavLink to="/blog">{t('blog.buttonText')}</StyledNavLink>
      </StyledContainer>
    </section>
  );
};

export default SectionBlog;
