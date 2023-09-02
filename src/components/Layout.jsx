import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header } from './Header/Header';
import { useEffect, useState } from 'react';
import {
  headerEnContent,
  headerRuContent,
  headerUaContent,
} from './Header/index';
// import { ThreeDots } from 'react-loader-spinner';

export const Layout = ({ lang }) => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    switch (lang) {
      case 'ru':
        setContent(headerRuContent);
        break;

      case 'ua':
        setContent(headerUaContent);
        break;

      case 'en':
        setContent(headerEnContent);
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
        </main>
        {/* <StyledFooter>PhoneBook. Created by Valeria Vasahlo</StyledFooter> */}
      </Suspense>
    </>
  );
};
