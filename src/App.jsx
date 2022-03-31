import { Suspense, lazy } from 'react';
import { Outlet, useRoutes } from 'react-router-dom';

import About from './views/About';
import NoView from './views/NoView';

const Menu = lazy(() => import('./views/Menu'));
const Portfolio = lazy(() => import('./views/Portofolio'));

function Layout() {
  return (
    <>
      <Outlet />
    </>
  );
}

function App() {
  const element = useRoutes([
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <About /> },
        {
          path: '/menu',
          element: (
            <Suspense fallback={<>...</>}>
              <Menu />
            </Suspense>
          )
        },
        {
          path: '/portofolio',
          element: (
            <Suspense fallback={<>...</>}>
              <Portfolio />
            </Suspense>
          )
        },
        { path: '*', element: <NoView /> }
      ]
    }
  ]);
  return <div className="app">{element}</div>;
}

export default App;
