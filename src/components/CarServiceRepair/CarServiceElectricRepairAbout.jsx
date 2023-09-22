import { useTranslation } from 'react-i18next';
import {
  StyledP,
  StyledContainer,
  StyledSpan,
} from './CarServiceRepair.styled';
export const CarServiceElectricRepairAbout = () => {
  const { t } = useTranslation();
  return (
    <section>
      <StyledContainer>
        <StyledP>{t('electricRepair.paragraph.0')}</StyledP>
        <StyledP>
          {t('electricRepair.paragraph.1')}{' '}
          <StyledSpan>{t('electricRepair.paragraph.2')}</StyledSpan>
          {t('electricRepair.paragraph.3')}
        </StyledP>
        <StyledP>
          {t('electricRepair.paragraph.4')}
          <StyledSpan> {t('electricRepair.paragraph.5')}</StyledSpan>
          {t('electricRepair.paragraph.6')}
        </StyledP>
        <StyledP>
          {t('electricRepair.paragraph.7')}
          <StyledSpan> {t('electricRepair.paragraph.8')}</StyledSpan>
          {t('electricRepair.paragraph.9')}
        </StyledP>
      </StyledContainer>
    </section>
  );
};
