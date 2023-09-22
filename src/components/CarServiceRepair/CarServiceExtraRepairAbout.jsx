import { useTranslation } from 'react-i18next';
import {
  StyledP,
  StyledContainer,
  StyledSpan,
  StyledMarginDiv,
  StyledFlexDesktopDiv,
} from './CarServiceRepair.styled';
import { CarServiceRepairForm } from './CarServiceRepairForm';

export const CarServiceExtraRepairAbout = () => {
  const { t } = useTranslation();
  return (
    <section>
      <StyledContainer>
        <StyledFlexDesktopDiv>
          <StyledMarginDiv>
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
          </StyledMarginDiv>
          <CarServiceRepairForm />
        </StyledFlexDesktopDiv>
      </StyledContainer>
    </section>
  );
};
