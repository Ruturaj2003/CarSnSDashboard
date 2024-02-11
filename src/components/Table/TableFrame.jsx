import { useEffect, useState } from 'react';
import DataTable from './DataTable';
import DModal from '../DModal';

const TableFrame = ({ url, tableHeadings }) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [overlayOpen, setOverlayOpen] = useState(true);
  const [editModal, setEditModal] = useState(false);
  const [createModal, setCreateModal] = useState(true);

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
                  data={data}
                  tableHeadings={tableHeadings}
                ></DataTable>
              </div>

              {/* Edit Modal */}
              <DModal
                isOpen={createModal}
                formTitle={'Create Customer'}
              ></DModal>
              {/* Create Modal */}
            </>
          ) : (
            <DataTable data={data} tableHeadings={tableHeadings}></DataTable>
          )}
        </>
      )}
    </div>
  );
};
export default TableFrame;
