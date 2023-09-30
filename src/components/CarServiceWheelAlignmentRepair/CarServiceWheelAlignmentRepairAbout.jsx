import { lazy } from 'react';
import { useTranslation } from 'react-i18next';
import { StyledContainer } from 'components/SectionServices/SectionServices.styled';
import bgD from '../../images/desktop/bg-circle-desktop.png';
import {
  StyledCircleDiv,
  StyledDesktopBgImg,
  StyledDiv,
  StyledH2,
  StyledH3,
  StyledP,
  StyledSpan,
} from 'components/SectionAbout/SectionAbout.styled';
import { StyledTableDiv } from './CarServiceWheelAlignmentRepair.styled';

const CarServiceRepairPrice = lazy(() =>
  import('components/CarServiceRepair/CarServiceRepairPrice')
);
export const CarServiceWheelAlignmentRepairAbout = () => {
  const { t } = useTranslation();
  return (
    <section>
      <StyledContainer>
        <StyledDesktopBgImg src={bgD} alt="background-circle" loading="lazy" />
        <StyledDiv>
          <StyledCircleDiv></StyledCircleDiv>
          <StyledH2>{t('carService.h2')}</StyledH2>
        </StyledDiv>
        <StyledH3>
          {t('wheelAlignment.h3.0')}
          <StyledSpan>{t('wheelAlignment.h3.1')}</StyledSpan>
          {t('wheelAlignment.h3.2')}
        </StyledH3>
        <StyledP>{t('wheelAlignment.paragraph')}</StyledP>
        <StyledTableDiv>
          <CarServiceRepairPrice
            h2={'wheelAlignment.h2'}
            list={'wheelAlignment.serviceList'}
            price={'wheelAlignment.priceList'}
          />
        </StyledTableDiv>
      </StyledContainer>
    </section>
  );
};
