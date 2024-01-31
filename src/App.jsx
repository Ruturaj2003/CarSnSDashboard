import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Table from './components/Table';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="flex">
        <Sidebar></Sidebar>
        <Table></Table>
      </div>
    </>
  );
}

export default App;
