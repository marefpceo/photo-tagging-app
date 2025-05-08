import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../pages/App';
import Home from '../pages/Home';
import GameMenu from '../pages/GameMenu';
import GameBoard from '../pages/GameBoard';

function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/menu', element: <GameMenu /> },
        { path: '/game', element: <GameBoard /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default Router;
