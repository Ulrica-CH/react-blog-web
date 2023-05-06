import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';

const Home = lazy(() => import('@/views/home'));
const Category = lazy(() => import('@/views/category'));
const Mine = lazy(() => import('@/views/my'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/home" />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/category',
    element: <Category />,
  },
  {
    path: '/my',
    element: <Mine />,
  },
];
export default routes;
