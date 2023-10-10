import { Outlet } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { RotatingLines } from 'react-loader-spinner';
import { Header } from './Header/Header';

const Footer = lazy(() => import('./Footer/Footer'));

const loaderStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
};

export const Layout = () => {
  return (
    <>
      <Header />
      <Suspense
        fallback={
          <div style={loaderStyle}>
            <RotatingLines
              strokeColor="#FDC70D"
              strokeWidth="5"
              animationDuration="0.75"
              width="66"
              visible={true}
            />
          </div>
        }
      >
        <main>
          <Outlet />
        </main>
        <Footer />
      </Suspense>
    </>
  );
};
