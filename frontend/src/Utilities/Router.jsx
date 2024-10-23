import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../pages/App';

function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default Router;
