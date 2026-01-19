import { MemberProvider } from '@/integrations';
import { createBrowserRouter, RouterProvider, Navigate, Outlet } from 'react-router-dom';
import { ScrollToTop } from '@/lib/scroll-to-top';
import ErrorPage from '@/integrations/errorHandlers/ErrorPage';
import HomePage from '@/components/pages/HomePage';
import ProductsPage from '@/components/pages/ProductsPage';
import WhySPCPage from '@/components/pages/WhySPCPage';
import CertificationsPage from '@/components/pages/CertificationsPage';
import ArchitectsPartnersPage from '@/components/pages/ArchitectsPartnersPage';
import AboutPage from '@/components/pages/AboutPage';
import ContactPage from '@/components/pages/ContactPage';

// Layout component that includes ScrollToTop
function Layout() {
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
        routeMetadata: {
          pageIdentifier: 'home',
        },
      },
      {
        path: "produktet",
        element: <ProductsPage />,
        routeMetadata: {
          pageIdentifier: 'products',
        },
      },
      {
        path: "pse-spc",
        element: <WhySPCPage />,
        routeMetadata: {
          pageIdentifier: 'why-spc',
        },
      },
      {
        path: "certifikime",
        element: <CertificationsPage />,
        routeMetadata: {
          pageIdentifier: 'certifications',
        },
      },
      {
        path: "arkitekte-partnere",
        element: <ArchitectsPartnersPage />,
        routeMetadata: {
          pageIdentifier: 'architects-partners',
        },
      },
      {
        path: "rreth-nesh",
        element: <AboutPage />,
        routeMetadata: {
          pageIdentifier: 'about',
        },
      },
      {
        path: "kontakt",
        element: <ContactPage />,
        routeMetadata: {
          pageIdentifier: 'contact',
        },
      },
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
  },
], {
  basename: import.meta.env.BASE_NAME,
});

export default function AppRouter() {
  return (
    <MemberProvider>
      <RouterProvider router={router} />
    </MemberProvider>
  );
}
