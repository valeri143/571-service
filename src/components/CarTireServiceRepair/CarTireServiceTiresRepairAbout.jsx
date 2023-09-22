import { useTranslation } from 'react-i18next';
import {
  StyledP,
  StyledContainer,
} from '../CarServiceRepair/CarServiceRepair.styled';

export const CarTireServiceTiresRepairAbout = () => {
  const { t } = useTranslation();
  return (
    <section>
      <h2 hidden>tireRepair</h2>
      <StyledContainer>
        <StyledP>{t('tireRepair.paragraph.0')}</StyledP>
        <StyledP>{t('tireRepair.paragraph.1')}</StyledP>
      </StyledContainer>
    </section>
  );
};
