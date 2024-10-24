import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../pages/App';
import Home from '../pages/Home';

function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default Router;
