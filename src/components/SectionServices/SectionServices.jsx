import {
  StyledBenefitsDiv,
  StyledBenefitsP,
  StyledBenefitsSpan,
  StyledBenefitsUl,
  StyledCircleDiv,
  StyledContainer,
  StyledDiv,
  StyledH2,
  StyledH3,
  StyledLineDiv,
  StyledNavLink,
  StyledNumP,
  StyledP,
  StyledServicesDiv,
  StyledServicesUl,
  StyledSvg,
  StyledUl,
} from './SectionServices.styled';
import sprite from '../../images/sprite.svg';

export const SectionServices = ({ content }) => {
  return (
    <section>
      <StyledContainer>
        <StyledBenefitsUl>
          <li>
            <StyledBenefitsDiv>
              <StyledNumP>4698</StyledNumP>
              <StyledLineDiv></StyledLineDiv>
              <StyledBenefitsP>
                {content.benefitsUl[0]}{' '}
                <StyledBenefitsSpan>{content.benefitsUl[1]}</StyledBenefitsSpan>
              </StyledBenefitsP>
            </StyledBenefitsDiv>
          </li>
          <li>
            <StyledBenefitsDiv>
              <StyledNumP>37</StyledNumP>
              <StyledLineDiv></StyledLineDiv>
              <StyledBenefitsP>
                {content.benefitsUl[2]}{' '}
                <StyledBenefitsSpan>{content.benefitsUl[3]}</StyledBenefitsSpan>
              </StyledBenefitsP>
            </StyledBenefitsDiv>
          </li>
          <li>
            <StyledBenefitsDiv>
              <StyledNumP>15</StyledNumP>
              <StyledLineDiv></StyledLineDiv>
              <StyledBenefitsP>
                {content.benefitsUl[4]}{' '}
                <StyledBenefitsSpan>{content.benefitsUl[5]}</StyledBenefitsSpan>
              </StyledBenefitsP>
            </StyledBenefitsDiv>
          </li>
        </StyledBenefitsUl>
        <StyledH2>{content.h2}</StyledH2>
        <StyledP>{content.p}</StyledP>
        <StyledUl>
          <li>
            <StyledDiv>
              <StyledCircleDiv>
                <StyledSvg width="66" height="66">
                  <use href={`${sprite}#icon-service`}></use>
                </StyledSvg>
              </StyledCircleDiv>
              <StyledH3>{content.servicesUlText[0]}</StyledH3>
              <StyledServicesUl>
                <li>
                  <StyledServicesDiv>
                    <svg width="16" height="12">
                      <use href={`${sprite}#icon-check`}></use>
                    </svg>
                    <p>{content.carServiceItem[0]}</p>
                  </StyledServicesDiv>
                </li>
                <li>
                  <StyledServicesDiv>
                    <svg width="16" height="12">
                      <use href={`${sprite}#icon-check`}></use>
                    </svg>
                    <p>{content.carServiceItem[1]}</p>
                  </StyledServicesDiv>
                </li>
                <li>
                  <StyledServicesDiv>
                    <svg width="16" height="12">
                      <use href={`${sprite}#icon-check`}></use>
                    </svg>
                    <p>{content.carServiceItem[2]}</p>
                  </StyledServicesDiv>
                </li>
                <li>
                  <StyledServicesDiv>
                    <svg width="16" height="12">
                      <use href={`${sprite}#icon-check`}></use>
                    </svg>
                    <p>{content.carServiceItem[3]}</p>
                  </StyledServicesDiv>
                </li>
                <li>
                  <StyledServicesDiv>
                    <svg width="16" height="12">
                      <use href={`${sprite}#icon-check`}></use>
                    </svg>
                    <p>{content.carServiceItem[4]}</p>
                  </StyledServicesDiv>
                </li>
                <li>
                  <StyledServicesDiv>
                    <svg width="16" height="12">
                      <use href={`${sprite}#icon-check`}></use>
                    </svg>
                    <p>{content.carServiceItem[5]}</p>
                  </StyledServicesDiv>
                </li>
              </StyledServicesUl>
              <StyledNavLink to={content.navLinks[0]}>
                {content.buttonText}
              </StyledNavLink>
            </StyledDiv>
          </li>
          <li>
            <StyledDiv>
              <StyledCircleDiv>
                <StyledSvg width="66" height="66">
                  <use href={`${sprite}#icon-car-wash`}></use>
                </StyledSvg>
              </StyledCircleDiv>
              <StyledH3>{content.servicesUlText[1]}</StyledH3>
              <StyledServicesUl style={{ marginBottom: 35 }}>
                <li>
                  <StyledServicesDiv>
                    <svg width="16" height="12">
                      <use href={`${sprite}#icon-check`}></use>
                    </svg>
                    <p>{content.carWashItem[0]}</p>
                  </StyledServicesDiv>
                </li>
                <li>
                  <StyledServicesDiv>
                    <svg width="16" height="12">
                      <use href={`${sprite}#icon-check`}></use>
                    </svg>
                    <p>{content.carWashItem[1]}</p>
                  </StyledServicesDiv>
                </li>
                <li>
                  <StyledServicesDiv>
                    <svg width="16" height="12">
                      <use href={`${sprite}#icon-check`}></use>
                    </svg>
                    <p>{content.carWashItem[2]}</p>
                  </StyledServicesDiv>
                </li>
                <li>
                  <StyledServicesDiv>
                    <svg width="16" height="12">
                      <use href={`${sprite}#icon-check`}></use>
                    </svg>
                    <p>{content.carWashItem[3]}</p>
                  </StyledServicesDiv>
                </li>
                <li>
                  <StyledServicesDiv>
                    <svg width="16" height="12">
                      <use href={`${sprite}#icon-check`}></use>
                    </svg>
                    <p>{content.carWashItem[4]}</p>
                  </StyledServicesDiv>
                </li>
                <li>
                  <StyledServicesDiv>
                    <svg width="16" height="12">
                      <use href={`${sprite}#icon-check`}></use>
                    </svg>
                    <p>{content.carWashItem[5]}</p>
                  </StyledServicesDiv>
                </li>
              </StyledServicesUl>
              <StyledNavLink to={content.navLinks[1]}>
                {content.buttonText}
              </StyledNavLink>
            </StyledDiv>
          </li>
          <li>
            <StyledDiv>
              <StyledCircleDiv>
                <StyledSvg width="66" height="66">
                  <use href={`${sprite}#icon-tire`}></use>
                </StyledSvg>
              </StyledCircleDiv>
              <StyledH3>{content.servicesUlText[2]}</StyledH3>
              <StyledServicesUl style={{ marginBottom: 138 }}>
                <li>
                  <StyledServicesDiv>
                    <svg width="16" height="12">
                      <use href={`${sprite}#icon-check`}></use>
                    </svg>
                    <p>{content.tireService[0]}</p>
                  </StyledServicesDiv>
                </li>
                <li>
                  <StyledServicesDiv>
                    <svg width="16" height="12">
                      <use href={`${sprite}#icon-check`}></use>
                    </svg>
                    <p>{content.tireService[1]}</p>
                  </StyledServicesDiv>
                </li>
                <li>
                  <StyledServicesDiv>
                    <svg width="16" height="12">
                      <use href={`${sprite}#icon-check`}></use>
                    </svg>
                    <p>{content.tireService[2]}</p>
                  </StyledServicesDiv>
                </li>
                <li>
                  <StyledServicesDiv>
                    <svg width="16" height="12">
                      <use href={`${sprite}#icon-check`}></use>
                    </svg>
                    <p>{content.tireService[3]}</p>
                  </StyledServicesDiv>
                </li>
              </StyledServicesUl>
              <StyledNavLink to={content.navLinks[2]}>
                {content.buttonText}
              </StyledNavLink>
            </StyledDiv>
          </li>
        </StyledUl>
      </StyledContainer>
    </section>
  );
};
