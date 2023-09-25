import { StyledContainer } from 'components/Hero/Hero.styled';
import { lazy } from 'react';
import { useTranslation } from 'react-i18next';
import newPost from '../../images/desktop/blog-new.png';
import postDesk from '../../images/desktop/post-desktop.png';
import post0101x from '../../images/posts/post01@1x-min.jpg';
import post0102x from '../../images/posts/post01@2x-min.jpg';
import post0201x from '../../images/posts/post02@1x-min.jpg';
import post0202x from '../../images/posts/post02@2x-min.jpg';
import {
  StyledBlockP,
  StyledDateP,
  StyledDiv,
  StyledFlexDiv,
  StyledH3,
  StyledImg,
  StyledLi,
  StyledNewDiv,
  StyledOpacityP,
  StyledP,
  StyledUl,
} from './BlogDetailsPage.styled';
import {
  StyledNewPost,
  StyledNewPostMobile,
} from 'components/PostsItem/PostsItem.styled';

const SectionBlog = lazy(() => import('components//SectionBlog/SectionBlog'));

const SectionContacts = lazy(() =>
  import('components//SectionContacts/SectionContacts')
);

const BlogDetailsPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <section>
        <StyledContainer>
          <StyledFlexDiv>
            <ul>
              <StyledLi>
                <StyledNewDiv>NEW</StyledNewDiv>
                <StyledNewPost>
                  <picture>
                    <source
                      media="(min-width: 1512px)"
                      srcSet={`${newPost} 1x, ${newPost} 2x`}
                      width={794}
                    />
                    <img
                      srcSet={`${post0101x} 1x, ${post0102x} 2x`}
                      src={post0101x}
                      alt="post-img"
                      sizes="(max-width: 1512px) 100vw, 387px"
                      loading="lazy"
                      height={230}
                    />
                  </picture>
                </StyledNewPost>
                <StyledNewPostMobile>
                  <StyledImg
                    srcSet={`${post0101x} 1x, ${post0102x} 2x`}
                    src={post0101x}
                    alt="post-img"
                    loading="lazy"
                    width={387}
                    height={230}
                  />
                </StyledNewPostMobile>
                <StyledDateP>10.06.2023</StyledDateP>
                <StyledH3>{t('blog.posts.0.0')}</StyledH3>
                <StyledP>
                  Что такое Lorem Ipsum? Lorem Ipsum - это текст-"рыба", часто
                  используемый в печати и вэб-дизайне. Lorem Ipsum является
                  стандартной "рыбой" для текстов на латинице с начала XVI века.
                  В то время некий безымянный печатник создал большую коллекцию
                  размеров и форм шрифтов, используя Lorem Ipsum для распечатки
                  образцов. Lorem Ipsum не только успешно пережил без заметных
                  изменений пять веков, но и перешагнул в электронный дизайн.
                  Его популяризации в новое время послужили публикация листов
                  Letraset с образцами Lorem Ipsum в 60-х годах и, в более
                  недавнее время, программы электронной вёрстки типа Aldus
                  PageMaker, в шаблонах которых используется Lorem Ipsum.
                </StyledP>
              </StyledLi>
              <li>
                <StyledNewPost>
                  <img
                    src={postDesk}
                    alt="post-desktop-img"
                    width={794}
                    height={519}
                  />
                </StyledNewPost>
                <StyledNewPostMobile>
                  <img
                    srcSet={`${post0201x} 1x, ${post0202x} 2x`}
                    src={post0201x}
                    alt="post-img"
                    loading="lazy"
                    width={387}
                    height={230}
                  />
                </StyledNewPostMobile>
                <StyledP>
                  Что такое Lorem Ipsum? Lorem Ipsum - это текст-"рыба", часто
                  используемый в печати и вэб-дизайне. Lorem Ipsum является
                  стандартной "рыбой" для текстов на латинице с начала XVI века.
                  В то время некий безымянный печатник создал большую коллекцию
                  размеров и форм шрифтов, используя Lorem Ipsum для распечатки
                  образцов. Lorem Ipsum не только успешно пережил без заметных
                  изменений пять веков, но и перешагнул в электронный дизайн.
                  Его популяризации в новое время послужили публикация листов
                  Letraset с образцами Lorem Ipsum в 60-х годах и, в более
                  недавнее время, программы электронной вёрстки типа Aldus
                  PageMaker, в шаблонах которых используется Lorem Ipsum. Что
                  такое Lorem Ipsum? Lorem Ipsum - это текст-"рыба", часто
                  используемый в печати и вэб-дизайне. Lorem Ipsum является
                  стандартной "рыбой" для текстов на латинице с начала XVI века.
                  В то время некий безымянный печатник создал большую коллекцию
                  размеров и форм шрифтов, используя Lorem Ipsum для распечатки
                  образцов. Lorem Ipsum не только успешно пережил без заметных
                  изменений пять веков, но и перешагнул в электронный дизайн.
                  Его популяризации в новое время послужили публикация листов
                  Letraset с образцами Lorem Ipsum в 60-х годах и, в более
                  недавнее время, программы электронной вёрстки типа Aldus
                  PageMaker, в шаблонах которых используется Lorem Ipsum. Lorem
                  Ipsum - это текст-"рыба", часто используемый в печати и
                  вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для
                  текстов на латинице с начала XVI века. В то время некий
                  безымянный печатник создал большую коллекцию размеров и форм
                  шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem
                  Ipsum не только успешно пережил без заметных изменений пять
                  веков, но и перешагнул в электронный дизайн. Его популяризации
                  в новое время послужили публикация листов Letraset с образцами
                  Lorem Ipsum в 60-х годах и, в более недавнее время, программы
                  электронной вёрстки типа Aldus PageMaker, в шаблонах которых
                  используется Lorem Ipsum.
                </StyledP>
              </li>
            </ul>
            <StyledUl>
              <li>
                <StyledDiv>
                  <StyledDateP>10.06.2023</StyledDateP>
                  <StyledBlockP>{t('blog.posts.2.0')}</StyledBlockP>
                </StyledDiv>
              </li>
              <li>
                <StyledDiv>
                  <StyledDateP>10.06.2023</StyledDateP>
                  <StyledBlockP>{t('blog.posts.0.0')}</StyledBlockP>
                </StyledDiv>
              </li>
              <li>
                <StyledDiv>
                  <StyledDateP>10.06.2023</StyledDateP>
                  <StyledBlockP>{t('blog.posts.1.0')}</StyledBlockP>
                </StyledDiv>
              </li>
              <li>
                <StyledDiv>
                  <StyledDateP>10.06.2023</StyledDateP>
                  <StyledBlockP>{t('blog.posts.2.0')}</StyledBlockP>
                  <StyledOpacityP>{t('blog.posts.2.1')}</StyledOpacityP>
                </StyledDiv>
              </li>
            </StyledUl>
          </StyledFlexDiv>
        </StyledContainer>
      </section>
      <SectionBlog />
      <SectionContacts />
    </>
  );
};
export default BlogDetailsPage;
