import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { lazy, useEffect } from 'react';
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
const CarServiceWheelAlignmentRepairPage = lazy(() =>
  import(
    '../pages/CarServicePage/CarServiceWheelAlignmentRepairPage/CarServiceWheelAlignmentRepairPage'
  )
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
  const { i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const currentPath = location.pathname;
    const currentLanguage = i18n.language;

    const language = currentPath.split('/')[1];

    if (language === 'ru' || language === 'ua') {
      i18n.changeLanguage(language);
    } else {
      currentLanguage === 'ru' ? navigate('/ru') : navigate('/ua');
    }
  }, [i18n, navigate, location]);

  return (
    <Routes basename="/571-service/">
      <Route path="/:lang" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/:lang/car-service/" element={<CarServicePage />} />
        <Route
          path="/:lang/car-service/wheel-alignment"
          element={<CarServiceWheelAlignmentRepairPage />}
        />
        <Route
          path="/:lang/car-service/engine-repair"
          element={<CarServiceEngineRepairPage />}
        />
        <Route
          path="/:lang/car-service/gearbox-repair"
          element={<CarServiceGearboxRepairPage />}
        />
        <Route
          path="/:lang/car-service/chassis-repair"
          element={<CarServiceChassisRepairPage />}
        />
        <Route
          path="/:lang/car-service/electric-repair"
          element={<CarServiceElectricRepairPage />}
        />
        <Route
          path="/:lang/car-service/car-body-repair"
          element={<CarServiceBodyRepairPage />}
        />
        <Route
          path="/:lang/car-service/extra-services"
          element={<CarServiceExtraRepairPage />}
        />
        <Route
          path="/:lang/car-wash-service"
          element={<CarWashServicePage />}
        />
        <Route
          path="/:lang/car-wash-service/headlight-polishing"
          element={<CarWashServiceHeadlightPolishingPage />}
        />
        <Route
          path="/:lang/car-wash-service/cleaning"
          element={<CarWashServiceCleaningPage />}
        />
        <Route
          path="/:lang/car-wash-service/extra-services"
          element={<CarWashServiceExtraPage />}
        />
        <Route
          path="/:lang/car-tire-service"
          element={<CarTireServicePage />}
        />
        <Route
          path="/:lang/car-tire-service/mounting-dismantling-of-tires"
          element={<CarTireServiceMountingDismantlingOfTiresPage />}
        />
        <Route
          path="/:lang/car-tire-service/tires-repair"
          element={<CarTireServiceTiresRapairPage />}
        />
        <Route
          path="/:lang/car-tire-service/chassis-maintenance"
          element={<CarTireServiceChassisMaintenancePage />}
        />
        <Route path="/:lang/feedbacks" element={<FeedbacksPage />} />
        <Route path="/:lang/blog" element={<BlogPage />} />
        <Route
          path="/:lang/blog/modern-car-service"
          element={<BlogDetailsPage />}
        />
        <Route path="/:lang/vacancies" element={<VacanciesPage />} />
        <Route path="/:lang/contacts" element={<ContactsPage />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
