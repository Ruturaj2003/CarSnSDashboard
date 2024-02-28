import { useEffect, useState } from 'react';
import DataTable from './DataTable';

import CreateModal from '../CreateModal';
import EditModal from '../EditModal';

const TableFrame = ({ url, tableHeadings, formName, tableData, fetchFn }) => {
  const [loading, setLoading] = useState(false);
  const [overlayOpen, setOverlayOpen] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [editModalData, setEditModalData] = useState(null);
  const [createModal, setCreateModal] = useState(false);

  const handleModalOpen = () => {
    setOverlayOpen(true);
    setCreateModal(true);
  };
  const handleEditModalOpen = () => {
    setOverlayOpen(true);
    setEditModal(true);
  };

  const inputFields = tableHeadings.map((heading) => heading.toLowerCase());

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
                  handleModalOpen={handleModalOpen}
                  handleEditModalOpen={handleEditModalOpen}
                  setEditModalData={setEditModalData}
                  data={tableData}
                  tableHeadings={tableHeadings}
                  fetchFn={fetchFn}
                ></DataTable>
              </div>

              <CreateModal
                url={url}
                isOpen={createModal}
                formTitle={'Create ' + formName}
                inputFields={inputFields}
                setModal={setCreateModal}
                setOverlay={setOverlayOpen}
                fetchFn={fetchFn}
              ></CreateModal>
              <EditModal
                url={url}
                isOpen={editModal}
                formTitle={'Edit ' + formName}
                inputFields={inputFields}
                setModal={setEditModal}
                setOverlay={setOverlayOpen}
                rowData={editModalData}
                fetchFn={fetchFn}
              ></EditModal>
            </>
          ) : (
            <DataTable
              url={url}
              data={tableData}
              handleModalOpen={handleModalOpen}
              handleEditModalOpen={handleEditModalOpen}
              setEditModalData={setEditModalData}
              tableHeadings={tableHeadings}
              fetchFn={fetchFn}
            ></DataTable>
          )}
        </>
      )}
    </div>
  );
};
export default TableFrame;
