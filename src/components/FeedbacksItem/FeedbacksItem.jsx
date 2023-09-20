import sprite from '../../images/sprite.svg';
import {
  StyledFeedbackBracketsSvg,
  StyledFeedbackDiv,
  StyledFeedbackFlexBoxDiv,
  StyledFeedbackFlexDiv,
  StyledFeedbackFlexP,
  StyledFeedbackH4,
  StyledFeedbackP,
} from './FeedbacksItem.styled';

export const FeedbacksItem = ({ h4, paragraph, name, starsRating, rating }) => {
  return (
    <StyledFeedbackDiv>
      <StyledFeedbackH4>{h4}</StyledFeedbackH4>
      <StyledFeedbackBracketsSvg width="23" height="21">
        <use href={`${sprite}#icon-brackets`}></use>
      </StyledFeedbackBracketsSvg>
      <StyledFeedbackP>{paragraph}</StyledFeedbackP>
      <StyledFeedbackFlexDiv>
        <StyledFeedbackFlexP>{name}</StyledFeedbackFlexP>
        <StyledFeedbackFlexBoxDiv>
          <svg width="97" height="16">
            <use href={`${sprite}#${starsRating}`}></use>
          </svg>
          <StyledFeedbackFlexP>{`(${rating})`}</StyledFeedbackFlexP>
        </StyledFeedbackFlexBoxDiv>
      </StyledFeedbackFlexDiv>
    </StyledFeedbackDiv>
  );
};
