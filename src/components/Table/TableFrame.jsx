import { useEffect, useState } from 'react';
import DataTable from './DataTable';
import DModal from '../DModal';
import axios from 'axios';

const TableFrame = ({ url, tableHeadings, formName }) => {
  console.log(url);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [overlayOpen, setOverlayOpen] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [editModalData, setEditModalData] = useState(null);
  const [createModal, setCreateModal] = useState(false);
  const abortController = new AbortController();
  const fetchData = async () => {
    const abortController = new AbortController();
    try {
      setLoading(true);
      const { data: responseData } = await axios.get(url, {
        signal: abortController.signal,
      });
      console.log(responseData);
      setData(responseData);
    } catch (error) {
      if (!abortController.signal.aborted) {
        console.error(error);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleModalOpen = () => {
    setOverlayOpen(true);
    setCreateModal(true);
  };
  const handleEditModalOpen = () => {
    setOverlayOpen(true);
    setEditModal(true);
  };

  const inputFields = tableHeadings.map((heading) => heading.toLowerCase());

  console.log(inputFields);
  useEffect(() => {
    fetchData();

    return () => {
      // Cleanup function
      abortController.abort();
      // Cancel the request if the component is unmounted
    };
  }, []);
  return (
    <div className="rounded-sm mt-5 mr-16 w-full h-[600px] overflow-hidden">
      {loading ? (
        <h3>Your Data is Loading Please Wait</h3>
      ) : (
        <>
          {overlayOpen ? (
            <>
              <div className="relative  bg-slate-200 w-full h-full opacity-50">
                <DataTable
                  url={url}
                  fetchData={fetchData}
                  handleModalOpen={handleModalOpen}
                  handleEditModalOpen={handleEditModalOpen}
                  setEditModalData={setEditModalData}
                  data={data}
                  tableHeadings={tableHeadings}
                ></DataTable>
              </div>

              {/* Edit Modal */}
              <DModal
                url={url}
                isOpen={createModal}
                formTitle={'Create ' + formName}
                inputFields={inputFields}
                setModal={setCreateModal}
                setOverlay={setOverlayOpen}
                rowData={{}}
                action={'POST'}
                fetchData={fetchData}
              ></DModal>
              <DModal
                url={url}
                isOpen={editModal}
                formTitle={'Edit ' + formName}
                inputFields={inputFields}
                setModal={setEditModal}
                setOverlay={setOverlayOpen}
                rowData={editModalData}
                action={'PUT'}
                fetchData={fetchData}
              ></DModal>
              {/* Create Modal */}
            </>
          ) : (
            <DataTable
              url={url}
              data={data}
              handleModalOpen={handleModalOpen}
              handleEditModalOpen={handleEditModalOpen}
              setEditModalData={setEditModalData}
              tableHeadings={tableHeadings}
            ></DataTable>
          )}
        </>
      )}
    </div>
  );
};
export default TableFrame;
