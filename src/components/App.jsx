import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { Layout } from './Layout';
import { NotFound } from 'pages/NotFound/NotFound';

const Home = lazy(() => import('../pages/Home/Home'));
const FeedbacksPage = lazy(() =>
  import('../pages/FeedbacksPage/FeedbacksPage')
);

export const App = () => {
  return (
    <Routes basename="/571-service">
      <Route path="/" element={<Layout lang={'ru'} />}>
        <Route index element={<Home lang={'ru'} />} />
        <Route path="/feedbacks" element={<FeedbacksPage />} />
        <Route path="/blog" element={<FeedbacksPage />} />
        <Route path="/tire-service" element={<FeedbacksPage />} />
      </Route>
      <Route path="/ua" element={<Layout lang={'ua'} />}>
        <Route index element={<Home lang={'ua'} />} />
        <Route path="/ua/feedbacks" element={<FeedbacksPage />} />
        <Route path="/ua/blog" element={<FeedbacksPage />} />
        <Route path="/ua/tire-service" element={<FeedbacksPage />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
