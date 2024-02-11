import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Initial from './pages/Initial';

import Customer from './pages/Customer';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 3,
    },
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <Initial></Initial>,
    errorElement: <h1>sorry GG</h1>,
    children: [
      {
        index: true,
        element: <Home></Home>,
        errorElement: <h1>Sda</h1>,
      },
      {
        path: '/home',
        element: <Home></Home>,
        errorElement: <h1>Sda</h1>,
      },

      {
        path: '/losade',
        element: <h1>asds</h1>,
        errorElement: <h1>Sda</h1>,
      },

      {
        path: '/customer',
        element: <Customer></Customer>,
        errorElement: <h1>Sda</h1>,
      },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}></RouterProvider>
    </QueryClientProvider>
  );
}

export default App;
