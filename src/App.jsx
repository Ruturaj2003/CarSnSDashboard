import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Table from './components/Table';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="flex">
        <Sidebar></Sidebar>
        {/* <Table></Table> */}
        <Home></Home>
      </div>
    </>
  );
}

export default App;
