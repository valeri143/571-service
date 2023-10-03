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
  StyledImg,
  StyledConfidenceDiv,
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
              <StyledImg
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
                <StyledPhoneP>063 527 15 19</StyledPhoneP>
              </StyledNumberDiv>
              <div>
                <StyledP>E-mail:</StyledP>
                <StyledSpan>sto@571.com.ua</StyledSpan>
              </div>
              <div>
                <StyledP>{t('footer.time')}</StyledP>
                <ul>
                  <li>
                    <StyledTimeDiv>
                      <StyledP>Пн- Пт </StyledP>
                      <StyledSpan>с 09:00-18:00</StyledSpan>
                    </StyledTimeDiv>
                  </li>
                  <li>
                    <StyledTimeDiv>
                      <StyledP>Сб-Вс </StyledP>
                      <StyledSpan>с 09:00-16:00</StyledSpan>
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
                <StyledItemP>{t('hero.animationText.0')}</StyledItemP>
              </li>
              <li>
                <StyledItemP>{t('header.servicesMenu.3')}</StyledItemP>
              </li>
            </StyledNavLinksListUl>
          </div>
          <div>
            <StyledH5>{t('footer.newCarWashServiceList.0')}</StyledH5>
            <StyledNavLinksListUl>
              <li>
                <StyledItemP>{t('footer.newCarWashServiceList.1')}</StyledItemP>
              </li>
              <li>
                <StyledItemP>{t('footer.newCarWashServiceList.2')}</StyledItemP>
              </li>
              <li>
                <StyledItemP>{t('footer.newCarWashServiceList.3')}</StyledItemP>
              </li>
              <li>
                <StyledItemP>{t('footer.newCarWashServiceList.4')}</StyledItemP>
              </li>
              <li>
                <StyledItemP>{t('footer.newCarWashServiceList.5')}</StyledItemP>
              </li>
              <li>
                <StyledItemP>{t('footer.newCarWashServiceList.6')}</StyledItemP>
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
                <StyledItemP>{t('header.servicesMenu.4')}</StyledItemP>
              </li>
            </StyledNavLinksListUl>
          </div>
        </StyledFlexBoxDiv>
        <StyledFooterLineDiv></StyledFooterLineDiv>
        <StyledConfidenceDiv>
          <StyledConfidenceP>{t('footer.confidance')}</StyledConfidenceP>
          <StyledRightsP>{t('footer.rights')}</StyledRightsP>
        </StyledConfidenceDiv>
      </StyledContainer>
    </StyledFooter>
  );
};

export default Footer;
