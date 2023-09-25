import styled from 'styled-components';

export const StyledContainer = styled.div`
  overflow: hidden;
  padding: 50px 0px 80px 0px;
  margin: 0 auto;
  box-sizing: border-box;
  position: relative;
  text-align: left;
  @media screen and (min-width: 390px) {
    width: 390px;
  }
  @media screen and (min-width: 768px) {
    width: 768px;
  }
  @media screen and (min-width: 1512px) {
    width: 1512px;
    padding: 100px 0px 150px 0px;
  }
`;

export const StyledContentContainer = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  @media screen and (min-width: 1512px) {
    padding-left: 156px;
    padding-right: 156px;
  }
`;

export const StyledImgBox = styled.div`
  display: flex;
  justify-content: center;
  max-width: 258px;
  max-height: 349px;
  padding: 20px 20px;
  border-radius: 8px;
  background: var(--light-color);
  box-shadow: 0px 0px 60px 0px rgba(129, 129, 129, 0.15);
`;

export const SwiperContainer = styled.div`
  .swiper-pagination-bullet-active {
    background-color: var(--accent-color);
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-pagination {
    position: static;
    margin-top: 48px;
  }
  .swiper-button-prev,
  .swiper-button-next {
    top: unset;
    bottom: 7%;
    border: none;
    background: none;
  }
  .swiper-button-prev::after,
  .swiper-button-next::after {
    content: none;
  }
  .swiper-button-prev {
    left: 30%;
  }
  .swiper-button-next {
    right: 30%;
  }
`;
export const StyledArrowImg = styled.img`
  max-width: 46px;
  @media screen and (min-width: 1512px) {
    display: none;
  }
`;

export const StyledArrowNext = styled.img`
  max-width: 56px;
`;
