import {
  StyledBackGroundImage,
  StyledButton,
  StyledContainer,
  StyledH1,
  StyledP,
} from './Hero.styled';

export const Hero = ({ content }) => {
  return (
    <section>
      <StyledBackGroundImage>
        <StyledContainer>
          <StyledH1>{content.h1}</StyledH1>
          <StyledP>{content.p}</StyledP>
          <StyledButton>{content.buttonText}</StyledButton>
        </StyledContainer>
      </StyledBackGroundImage>
    </section>
  );
};
