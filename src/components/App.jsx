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
  import(
    '../pages/CarServicePage/CarServiceEngineRepairPage/CarServiceEngineRepairPage'
  )
);
const CarServiceGearboxRepairPage = lazy(() =>
  import(
    '../pages/CarServicePage/CarServiceGearboxRepairPage/CarServiceGearboxRepairPage'
  )
);
const CarServiceChassisRepairPage = lazy(() =>
  import(
    '../pages/CarServicePage/CarServiceChassisRepairPage/CarServiceChassisRepairPage'
  )
);
const CarServiceElectricRepairPage = lazy(() =>
  import(
    '../pages/CarServicePage/CarServiceElectricRepairPage/CarServiceElectricRepairPage'
  )
);

const CarServiceBodyRepairPage = lazy(() =>
  import(
    '../pages/CarServicePage/CarServiceBodyRepairPage/CarServiceBodyRepairPage'
  )
);

const CarServiceExtraRepairPage = lazy(() =>
  import(
    '../pages/CarServicePage/CarServiceExtraRepairPage/CarServiceExtraRepairPage'
  )
);
const CarWashServiceHeadlightPolishingPage = lazy(() =>
  import(
    '../pages/CarWashServicePage/CarWashServiceHeadlightPolishingPage/CarWashServiceHeadlightPolishingPage'
  )
);
const CarWashServiceCleaningPage = lazy(() =>
  import(
    '../pages/CarWashServicePage/CarWashServiceCleaningPage/CarWashServiceCleaningPage'
  )
);

const CarWashServiceExtraPage = lazy(() =>
  import(
    '../pages/CarWashServicePage/CarWashServiceExtraPage/CarWashServiceExtraPage'
  )
);

const CarTireServiceMountingDismantlingOfTiresPage = lazy(() =>
  import(
    '../pages/CarTireServicePage/CarTireServiceMountingDismantlingOfTiresPage/CarTireServiceMountingDismantlingOfTiresPage'
  )
);

const CarTireServiceTiresRapairPage = lazy(() =>
  import(
    '../pages/CarTireServicePage/CarTireServiceTiresRapairPage/CarTireServiceTiresRapairPage'
  )
);
const CarTireServiceChassisMaintenancePage = lazy(() =>
  import(
    '../pages/CarTireServicePage/CarTireServiceChassisMaintenancePage/CarTireServiceChassisMaintenancePage'
  )
);
const FeedbacksPage = lazy(() =>
  import('../pages/FeedbacksPage/FeedbacksPage')
);
const ContactsPage = lazy(() => import('../pages/ContactsPage/ContactsPage'));
const BlogPage = lazy(() => import('../pages/BlogPage/BlogPage'));
const BlogDetailsPage = lazy(() =>
  import('../pages/BlogDetailsPage/BlogDetailsPage')
);
const VacanciesPage = lazy(() =>
  import('../pages/VacanciesPage/VacanciesPage')
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
        <Route
          path="/car-service/electric-repair"
          element={<CarServiceElectricRepairPage />}
        />
        <Route
          path="/car-service/car-body-repair"
          element={<CarServiceBodyRepairPage />}
        />
        <Route
          path="/car-service/extra-services"
          element={<CarServiceExtraRepairPage />}
        />
        <Route path="/car-wash-service" element={<CarWashServicePage />} />
        <Route
          path="/car-wash-service/headlight-polishing"
          element={<CarWashServiceHeadlightPolishingPage />}
        />
        <Route
          path="/car-wash-service/cleaning"
          element={<CarWashServiceCleaningPage />}
        />
        <Route
          path="/car-wash-service/extra-services"
          element={<CarWashServiceExtraPage />}
        />
        <Route path="/car-tire-service" element={<CarTireServicePage />} />
        <Route
          path="/car-tire-service/mounting-dismantling-of-tires"
          element={<CarTireServiceMountingDismantlingOfTiresPage />}
        />
        <Route
          path="/car-tire-service/tires-repair"
          element={<CarTireServiceTiresRapairPage />}
        />
        <Route
          path="/car-tire-service/chassis-maintenance"
          element={<CarTireServiceChassisMaintenancePage />}
        />
        <Route path="/feedbacks" element={<FeedbacksPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/modern-car-service" element={<BlogDetailsPage />} />
        <Route path="/vacancies" element={<VacanciesPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
