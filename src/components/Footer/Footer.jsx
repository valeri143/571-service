import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { StyledContainer } from 'components/SectionServices/SectionServices.styled';
import {
  StyledConfidenceP,
  StyledContactsDiv,
  StyledFlexBoxDiv,
  StyledFooter,
  StyledFooterLineDiv,
  StyledImgDiv,
  StyledItemNavLink,
  StyledH5,
  StyledNavLinksListUl,
  StyledNumberDiv,
  StyledP,
  StyledPhoneLink,
  StyledRightsP,
  StyledLink,
  StyledTimeDiv,
  StyledImg,
  StyledConfidenceDiv,
  StyledItemP,
} from './Footer.styled';
import logo from '../../images/logo.svg';

const Footer = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
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
                onClick={() => {
                  navigate(`/${i18n.language}`);
                }}
              />
            </StyledImgDiv>
            <StyledContactsDiv>
              <StyledNumberDiv>
                <StyledPhoneLink href="tel:050 936 34 00">
                  050 936 34 00
                </StyledPhoneLink>
                <StyledPhoneLink href="tel:063 527 15 19">
                  063 527 15 19
                </StyledPhoneLink>
              </StyledNumberDiv>
              <div>
                <StyledP>E-mail:</StyledP>
                <StyledLink href="mailto:sto@571.com.ua">
                  sto@571.com.ua
                </StyledLink>
              </div>
              <div>
                <StyledP>{t('footer.time')}</StyledP>
                <ul>
                  <li>
                    <StyledTimeDiv>
                      <StyledP>Пн- Пт </StyledP>
                      <StyledLink>с 09:00-18:00</StyledLink>
                    </StyledTimeDiv>
                  </li>
                  <li>
                    <StyledTimeDiv>
                      <StyledP>Сб-Вс </StyledP>
                      <StyledLink>с 09:00-16:00</StyledLink>
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
                <StyledItemNavLink to="car-service/engine-repair">
                  {t('footer.carServiceList.0')}
                </StyledItemNavLink>
              </li>
              <li>
                <StyledItemNavLink to="car-service/gearbox-repair">
                  {t('footer.carServiceList.1')}
                </StyledItemNavLink>
              </li>
              <li>
                <StyledItemNavLink to="car-service/chassis-repair">
                  {t('footer.carServiceList.2')}
                </StyledItemNavLink>
              </li>
              <li>
                <StyledItemNavLink to="car-service/electric-repair">
                  {t('footer.carServiceList.3')}
                </StyledItemNavLink>
              </li>
              <li>
                <StyledItemNavLink to="car-service/wheel-alignment">
                  {t('hero.animationText.0')}
                </StyledItemNavLink>
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
                <StyledItemNavLink to="car-service/car-body-repair">
                  {t('footer.newCarWashServiceList.2')}
                </StyledItemNavLink>
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
                <StyledItemNavLink to="car-tire-service/mounting-dismantling-of-tires">
                  {t('footer.tireServiceList.0')}
                </StyledItemNavLink>
              </li>
              <li>
                <StyledItemNavLink to="car-tire-service/tires-repair">
                  {t('footer.tireServiceList.1')}
                </StyledItemNavLink>
              </li>
              <li>
                <StyledItemNavLink to="car-tire-service/chassis-maintenance">
                  {t('footer.tireServiceList.2')}
                </StyledItemNavLink>
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
