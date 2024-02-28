import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Initial from './pages/Initial';
import Customer from './pages/Customer';
import CustomerUI from './User/CustomerUI';
import UserHome from './User/UserHome';
import Service from './User/pages/Service';
import Employee from './pages/Employee';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import store from './state/store';
import Login from './User/pages/Login';
import SignUp from './User/pages/SignUp';
import Alogin from './pages/Login';
import BrowseCar from './User/pages/BrowseCar';
export const globalUrl = 'http://localhost:8081';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000,
    },
  },
});

const router = createBrowserRouter([
  { path: '/', element: <SignUp></SignUp>, errorElement: <h3>sad</h3> },
  { path: 'ulogin', element: <Login></Login>, errorElement: <h3>sad</h3> },
  { path: 'alogin', element: <Alogin></Alogin>, errorElement: <h3>sad</h3> },

  {
    path: '/admin',
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
  {
    path: '/user/browsecars',
    element: <BrowseCar></BrowseCar>,
    errorElement: <h1>Sda</h1>,
  },
]);

function App() {
  return (
    // <Service />
    // <BrowseCar></BrowseCar>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}></RouterProvider>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
