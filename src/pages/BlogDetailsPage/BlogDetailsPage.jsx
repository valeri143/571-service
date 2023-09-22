import { StyledContainer } from 'components/Hero/Hero.styled';
import { lazy } from 'react';
import { useTranslation } from 'react-i18next';
import { StyledNewDiv } from '../FeedbacksPage/FeedbacksPage.styled';
import post0101x from '../../images/posts/post01@1x-min.jpg';
import post0102x from '../../images/posts/post01@2x-min.jpg';
import post0201x from '../../images/posts/post02@1x-min.jpg';
import post0202x from '../../images/posts/post02@2x-min.jpg';
import {
  StyledDateP,
  StyledH3,
  StyledLi,
  StyledP,
} from './BlogDetailsPage.styled';

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
          <ul>
            <StyledLi>
              <StyledNewDiv>NEW</StyledNewDiv>
              <img
                srcSet={`${post0101x} 1x, ${post0102x} 2x`}
                src={post0101x}
                alt="post-img"
                loading="lazy"
                width={387}
                height={230}
              />
              <StyledDateP>10.06.2023</StyledDateP>
              <StyledH3>{t('blog.posts.0.0')}</StyledH3>
              <StyledP>
                Что такое Lorem Ipsum? Lorem Ipsum - это текст-"рыба", часто
                используемый в печати и вэб-дизайне. Lorem Ipsum является
                стандартной "рыбой" для текстов на латинице с начала XVI века. В
                то время некий безымянный печатник создал большую коллекцию
                размеров и форм шрифтов, используя Lorem Ipsum для распечатки
                образцов. Lorem Ipsum не только успешно пережил без заметных
                изменений пять веков, но и перешагнул в электронный дизайн. Его
                популяризации в новое время послужили публикация листов Letraset
                с образцами Lorem Ipsum в 60-х годах и, в более недавнее время,
                программы электронной вёрстки типа Aldus PageMaker, в шаблонах
                которых используется Lorem Ipsum.
              </StyledP>
            </StyledLi>
            <li>
              <img
                srcSet={`${post0201x} 1x, ${post0202x} 2x`}
                src={post0201x}
                alt="post-img"
                loading="lazy"
                width={387}
                height={230}
              />
              <StyledP>
                Что такое Lorem Ipsum? Lorem Ipsum - это текст-"рыба", часто
                используемый в печати и вэб-дизайне. Lorem Ipsum является
                стандартной "рыбой" для текстов на латинице с начала XVI века. В
                то время некий безымянный печатник создал большую коллекцию
                размеров и форм шрифтов, используя Lorem Ipsum для распечатки
                образцов. Lorem Ipsum не только успешно пережил без заметных
                изменений пять веков, но и перешагнул в электронный дизайн. Его
                популяризации в новое время послужили публикация листов Letraset
                с образцами Lorem Ipsum в 60-х годах и, в более недавнее время,
                программы электронной вёрстки типа Aldus PageMaker, в шаблонах
                которых используется Lorem Ipsum. Что такое Lorem Ipsum? Lorem
                Ipsum - это текст-"рыба", часто используемый в печати и
                вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для
                текстов на латинице с начала XVI века. В то время некий
                безымянный печатник создал большую коллекцию размеров и форм
                шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem
                Ipsum не только успешно пережил без заметных изменений пять
                веков, но и перешагнул в электронный дизайн. Его популяризации в
                новое время послужили публикация листов Letraset с образцами
                Lorem Ipsum в 60-х годах и, в более недавнее время, программы
                электронной вёрстки типа Aldus PageMaker, в шаблонах которых
                используется Lorem Ipsum. Lorem Ipsum - это текст-"рыба", часто
                используемый в печати и вэб-дизайне. Lorem Ipsum является
                стандартной "рыбой" для текстов на латинице с начала XVI века. В
                то время некий безымянный печатник создал большую коллекцию
                размеров и форм шрифтов, используя Lorem Ipsum для распечатки
                образцов. Lorem Ipsum не только успешно пережил без заметных
                изменений пять веков, но и перешагнул в электронный дизайн. Его
                популяризации в новое время послужили публикация листов Letraset
                с образцами Lorem Ipsum в 60-х годах и, в более недавнее время,
                программы электронной вёрстки типа Aldus PageMaker, в шаблонах
                которых используется Lorem Ipsum.
              </StyledP>
            </li>
          </ul>
        </StyledContainer>
      </section>
      <SectionBlog />
      <SectionContacts />
    </>
  );
};
export default BlogDetailsPage;
