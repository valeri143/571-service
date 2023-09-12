import {
  StyledButton,
  StyledContainer,
  StyledH1,
  StyledP,
} from './Hero.styled';

export const Hero = ({ content }) => {
  return (
    <section id="hero">
      <StyledContainer>
        <StyledH1>{content.h1}</StyledH1>
        <StyledP>{content.p}</StyledP>
        <StyledButton type="button">{content.buttonText}</StyledButton>
      </StyledContainer>
    </section>
  );
};
