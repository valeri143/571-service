import { useTranslation } from 'react-i18next';
import {
  StyledP,
  StyledContainer,
} from '../CarServiceRepair/CarServiceRepair.styled';

export const CarWashServiceHeadlightPolishingAbout = () => {
  const { t } = useTranslation();
  return (
    <section>
      <StyledContainer>
        <StyledP>{t('headlightPolishing.paragraph.0')}</StyledP>
        <StyledP>{t('headlightPolishing.paragraph.1')}</StyledP>
        <StyledP>{t('headlightPolishing.paragraph.2')}</StyledP>
      </StyledContainer>
    </section>
  );
};
