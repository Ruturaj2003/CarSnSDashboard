import { useEffect, useState } from 'react';
import DataTable from './DataTable';
import DModal from '../DModal';

const TableFrame = ({ url, tableHeadings }) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [overlayOpen, setOverlayOpen] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [editModalData, setEditModalData] = useState(null);
  const [createModal, setCreateModal] = useState(false);

  const fetchData = async () => {
    const abortController = new AbortController();
    try {
      setLoading(true);
      const { data: responseData } = await axios.get(url, {
        signal: abortController.signal,
      });
      setData(responseData);
    } catch (error) {
      if (!abortController.signal.aborted) {
        console.error(error);
      }
    } finally {
      setLoading(false);
    }

    useEffect(() => {
      const cleanupFunction = fetchData();

      return cleanupFunction;
    }, []); // Empty dependency array to run only on mount and unmount

    return () => {
      abortController.abort();
      // Cancel the request if the component is unmounted
    };
  };

  const handleModalOpen = () => {
    setOverlayOpen(true);
    setCreateModal(true);
  };
  const handleEditModalOpen = () => {
    setOverlayOpen(true);
    setEditModal(true);
  };
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
                  handleModalOpen={handleModalOpen}
                  handleEditModalOpen={handleEditModalOpen}
                  setEditModalData={setEditModalData}
                  data={data}
                  tableHeadings={tableHeadings}
                ></DataTable>
              </div>

              {/* Edit Modal */}
              <DModal
                isOpen={createModal}
                formTitle={'Create Customer'}
                inputFields={tableHeadings}
                setModal={setCreateModal}
                setOverlay={setOverlayOpen}
                rowData={{}}
                action={'POST'}
                fetchData={fetchData}
              ></DModal>
              <DModal
                isOpen={editModal}
                formTitle={'Edit Customer'}
                inputFields={tableHeadings}
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
