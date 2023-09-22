import { useTranslation } from 'react-i18next';
import {
  StyledP,
  StyledContainer,
  StyledSpan,
} from './CarServiceRepair.styled';

export const CarServiceExtraRepairAbout = () => {
  const { t } = useTranslation();
  return (
    <section>
      <StyledContainer>
        <StyledP>
          {t('extraRepair.paragraph.0')}{' '}
          <StyledSpan>{t('extraRepair.paragraph.1')}</StyledSpan>
          {t('extraRepair.paragraph.2')}
        </StyledP>
        <StyledP>
          {t('extraRepair.paragraph.3')}
          <StyledSpan> {t('extraRepair.paragraph.4')}</StyledSpan>
          {t('extraRepair.paragraph.5')}
        </StyledP>
        <StyledP>{t('extraRepair.paragraph.6')}</StyledP>
      </StyledContainer>
    </section>
  );
};
