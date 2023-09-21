import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { Layout } from './Layout';
import { NotFound } from 'pages/NotFound/NotFound';

const Home = lazy(() => import('../pages/Home/Home'));
const CarServicePage = lazy(() =>
  import('../pages/CarServicePage/CarServicePage')
);
const CarWashServicePage = lazy(() =>
  import('../pages/CarWashServicePage/CarWashServicePage')
);
const CarTireServicePage = lazy(() =>
  import('../pages/CarTireServicePage/CarTireServicePage')
);
const CarServiceEngineRepairPage = lazy(() =>
  import('../pages/CarServiceEngineRepairPage/CarServiceEngineRepairPage')
);
const CarServiceGearboxRepairPage = lazy(() =>
  import('../pages/CarServiceGearboxRepairPage/CarServiceGearboxRepairPage')
);
const CarServiceChassisRepairPage = lazy(() =>
  import('../pages/CarServiceChassisRepairPage/CarServiceChassisRepairPage')
);
const FeedbacksPage = lazy(() =>
  import('../pages/FeedbacksPage/FeedbacksPage')
);

export const App = () => {
  return (
    <Routes basename="/571-service/">
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/car-service" element={<CarServicePage />} />
        <Route
          path="/car-service/engine-repair"
          element={<CarServiceEngineRepairPage />}
        />
        <Route
          path="/car-service/gearbox-repair"
          element={<CarServiceGearboxRepairPage />}
        />
        <Route
          path="/car-service/chassis-repair"
          element={<CarServiceChassisRepairPage />}
        />
        <Route path="/car-wash-service" element={<CarWashServicePage />} />
        <Route path="/car-tire-service" element={<CarTireServicePage />} />
        <Route path="/feedbacks" element={<FeedbacksPage />} />
        <Route path="/blog" element={<FeedbacksPage />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
