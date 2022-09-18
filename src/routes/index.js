import HomePage from '../pages/home-page';
import AnimalPage from '../pages/animal-page';
import AnimalGalery from '../pages/animalgallery';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/animals',
    element: <AnimalPage />,
  },
  {
    path: '/animalgallery',
    element: <AnimalGalery />,
  },
]);
