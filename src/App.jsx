import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home';
import Initial from './pages/Initial';

import Customer from './pages/Customer';
import CustomerUI from './User/CustomerUI';
import UserHome from './User/UserHome';
<<<<<<< HEAD
<<<<<<< HEAD
import Service from './User/pages/Service';
=======
import Employee from './pages/Employee';
import { QueryClient, QueryClientProvider } from 'react-query';
>>>>>>> master
=======

import Service from './User/pages/Service';

  
import Employee from './pages/Employee';
import { QueryClient, QueryClientProvider } from 'react-query';

>>>>>>> 4777c0a71d112e989fd04442fd3e22cf677f11e0

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000,
    },
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <Initial />,
    errorElement: <h1>sorry GG</h1>,
    children: [
      {
        index: true,

        element: <Home />,
        errorElement: <h1>Sda</h1>,
      },
      {
        path: 'home',
        element: <Home />,
        errorElement: <h1>Sda</h1>,
      },
      {
        path: 'losade',
        element: <h1>asds</h1>,
        errorElement: <h1>Sda</h1>,
      },
      {
        path: 'customer',
        element: <Customer />,
        errorElement: <h1>Sda</h1>,
      },
      {
        path: 'employee',
        element: <Employee></Employee>,
        errorElement: <h1>Sda</h1>,
      },
    ],
  },
  {
    path: '/user',
    element: <CustomerUI></CustomerUI>,
    errorElement: <h3>Something went BAD</h3>,
    children: [
      {
        index: true,
        element: <UserHome></UserHome>,
        errorElement: <h1>Error in Home</h1>,
      },
    ],
  },
  {
    path: '/user/bookservice',
    element: <Service></Service>,
    errorElement: <h1>Sda</h1>,
  },
]);

function App() {
  return (
    // <Service />
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}></RouterProvider>
    </QueryClientProvider>
  );
}

export default App;
