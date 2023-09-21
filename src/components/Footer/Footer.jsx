import { useTranslation } from 'react-i18next';
import { StyledContainer } from 'components/SectionServices/SectionServices.styled';
import {
  StyledConfidenceP,
  StyledContactsDiv,
  StyledFlexBoxDiv,
  StyledFooter,
  StyledFooterLineDiv,
  StyledImgDiv,
  StyledItemP,
  StyledH5,
  StyledNavLinksListUl,
  StyledNumberDiv,
  StyledP,
  StyledPhoneP,
  StyledRightsP,
  StyledSpan,
  StyledTimeDiv,
} from './Footer.styled';
import logo from '../../images/logo.svg';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <StyledFooter>
      <StyledContainer style={{ paddingBottom: 41 }}>
        <StyledFlexBoxDiv>
          <div>
            <StyledImgDiv>
              <img
                src={logo}
                alt="logo"
                loading="lazy"
                width={43}
                height={38}
              />
            </StyledImgDiv>
            <StyledContactsDiv>
              <StyledNumberDiv>
                <StyledPhoneP>050 936 34 00</StyledPhoneP>
                <StyledPhoneP>044 698 98 98</StyledPhoneP>
              </StyledNumberDiv>
              <div>
                <StyledP>E-mail:</StyledP>
                <StyledSpan>info@571Service.com</StyledSpan>
              </div>
              <div>
                <StyledP>{t('footer.time')}</StyledP>
                <ul>
                  <li>
                    <StyledTimeDiv>
                      <StyledP>Пн- Пт </StyledP>
                      <StyledSpan>с 9:00-22:00</StyledSpan>
                    </StyledTimeDiv>
                  </li>
                  <li>
                    <StyledTimeDiv>
                      <StyledP>Сб-Вс </StyledP>
                      <StyledSpan>с 9:00-22:00</StyledSpan>
                    </StyledTimeDiv>
                  </li>
                </ul>
              </div>
            </StyledContactsDiv>
          </div>
          <div>
            <StyledH5>{t('footer.navLinksTitles.0')}</StyledH5>
            <StyledNavLinksListUl>
              <li>
                <StyledItemP>{t('footer.carServiceList.0')}</StyledItemP>
              </li>
              <li>
                <StyledItemP>{t('footer.carServiceList.1')}</StyledItemP>
              </li>
              <li>
                <StyledItemP>{t('footer.carServiceList.2')}</StyledItemP>
              </li>
              <li>
                <StyledItemP>{t('footer.carServiceList.3')}</StyledItemP>
              </li>
              <li>
                <StyledItemP>{t('footer.carServiceList.4')}</StyledItemP>
              </li>
              <li>
                <StyledItemP>{t('footer.carServiceList.5')}</StyledItemP>
              </li>
            </StyledNavLinksListUl>
          </div>
          <div>
            <StyledH5>{t('footer.navLinksTitles.1')}</StyledH5>
            <StyledNavLinksListUl>
              <li>
                <StyledItemP>{t('footer.carWashServiceList.0')}</StyledItemP>
              </li>
              <li>
                <StyledItemP>{t('footer.carWashServiceList.1')}</StyledItemP>
              </li>
              <li>
                <StyledItemP>{t('footer.carWashServiceList.2')}</StyledItemP>
              </li>
              <li>
                <StyledItemP>{t('footer.carWashServiceList.3')}</StyledItemP>
              </li>
              <li>
                <StyledItemP>{t('footer.carWashServiceList.4')}</StyledItemP>
              </li>
              <li>
                <StyledItemP>{t('footer.carWashServiceList.5')}</StyledItemP>
              </li>
            </StyledNavLinksListUl>
          </div>
          <div>
            <StyledH5>{t('footer.navLinksTitles.2')}</StyledH5>
            <StyledNavLinksListUl>
              <li>
                <StyledItemP>{t('footer.tireServiceList.0')}</StyledItemP>
              </li>
              <li>
                <StyledItemP>{t('footer.tireServiceList.1')}</StyledItemP>
              </li>
              <li>
                <StyledItemP>{t('footer.tireServiceList.2')}</StyledItemP>
              </li>
              <li>
                <StyledItemP>{t('footer.tireServiceList.3')}</StyledItemP>
              </li>
            </StyledNavLinksListUl>
          </div>
        </StyledFlexBoxDiv>
        <StyledFooterLineDiv></StyledFooterLineDiv>
        <StyledConfidenceP>{t('footer.confidance')}</StyledConfidenceP>
        <StyledRightsP>{t('footer.rights')}</StyledRightsP>
      </StyledContainer>
    </StyledFooter>
  );
};

export default Footer;
