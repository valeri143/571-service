import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header } from './Header/Header';
import { useEffect, useState } from 'react';
import { headerRuContent, headerUaContent } from './Header/index';
import { footerRuContent, footerUaContent } from './Footer';
import { SectionContacts } from './SectionContacts/SectionContacts';
import { Footer } from './Footer/Footer';
// import { ThreeDots } from 'react-loader-spinner';

export const Layout = ({ lang }) => {
  const [content, setContent] = useState(null);
  const [footerContent, setFooterContent] = useState(null);

  useEffect(() => {
    switch (lang) {
      case 'ru':
        setContent(headerRuContent);
        setFooterContent(footerRuContent);
        break;

      case 'ua':
        setContent(headerUaContent);
        setFooterContent(footerUaContent);
        break;

      default:
        break;
    }
  }, [lang]);

  return (
    <>
      {content && <Header content={content} />}
      <Suspense
        fallback={
          <h1>Loadiiing</h1>
          //   <ThreeDots
          //     height="80"
          //     width="80"
          //     radius="9"
          //     color="black"
          //     ariaLabel="three-dots-loading"
          //     wrapperStyle={{}}
          //     wrapperClassName=""
          //     visible={true}
          //   />
        }
      >
        <main>
          <Outlet />
          {footerContent && <SectionContacts content={footerContent} />}
        </main>
        {footerContent && <Footer content={footerContent} />}
      </Suspense>
    </>
  );
};
