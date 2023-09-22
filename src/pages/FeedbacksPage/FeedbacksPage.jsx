import { StyledContainer } from 'components/Hero/Hero.styled';
import {
  StyledCircleDiv,
  StyledDiv,
  StyledH2,
  StyledP,
} from 'components/SectionServices/SectionServices.styled';
import { lazy } from 'react';
import { useTranslation } from 'react-i18next';
import {
  StyledButton,
  StyledH3,
  StyledSpan,
  StyledUl,
} from './FeedbacksPage.styled';
import { FeedbacksItem } from 'components/FeedbacksItem/FeedbacksItem';

const SectionContacts = lazy(() =>
  import('components//SectionContacts/SectionContacts')
);

const FeedbacksPage = () => {
  const { t } = useTranslation();
  const feedbacks = t('feedbacks.feedbacks', { returnObjects: true });
  return (
    <>
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
          <StyledUl>
            {feedbacks.map((feedback, index) => (
              <li key={index}>
                <FeedbacksItem
                  h4={feedback[0]}
                  paragraph={feedback[1]}
                  name={feedback[2]}
                  starsRating="icon-rating"
                  rating="5.0"
                />
              </li>
            ))}
          </StyledUl>
          <StyledButton type="button">{t('buttonTextList.0')}</StyledButton>
        </StyledContainer>
      </section>
      <SectionContacts />
    </>
  );
};

export default FeedbacksPage;
