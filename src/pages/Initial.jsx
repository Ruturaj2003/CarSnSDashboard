import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const Initial = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="flex">
        <Sidebar></Sidebar>
        <Outlet></Outlet>
        {/* <Table></Table> */}
        {/* <Home></Home> */}
      </div>
    </>
  );
};
export default Initial;
