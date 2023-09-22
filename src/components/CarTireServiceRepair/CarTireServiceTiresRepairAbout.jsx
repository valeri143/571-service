import { useTranslation } from 'react-i18next';
import {
  StyledP,
  StyledContainer,
  StyledMarginDiv,
  StyledFlexDesktopDiv,
} from '../CarServiceRepair/CarServiceRepair.styled';
import { CarServiceRepairForm } from 'components/CarServiceRepair/CarServiceRepairForm';

export const CarTireServiceTiresRepairAbout = () => {
  const { t } = useTranslation();
  return (
    <section>
      <h2 hidden>tireRepair</h2>
      <StyledContainer>
        <StyledFlexDesktopDiv>
          <StyledMarginDiv>
            <StyledP>{t('tireRepair.paragraph.0')}</StyledP>
            <StyledP>{t('tireRepair.paragraph.1')}</StyledP>
          </StyledMarginDiv>
          <CarServiceRepairForm />
        </StyledFlexDesktopDiv>
      </StyledContainer>
    </section>
  );
};
