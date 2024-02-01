import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Table from './components/Table';
import Home from './pages/Home';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Initial from './pages/Initial';
import TableTemplate from './components/TableTemplate';

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
        path: '/table',
        element: <Table></Table>,
        errorElement: <h1>Sda</h1>,
      },
      {
        path: '/temp',
        element: <TableTemplate></TableTemplate>,
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
