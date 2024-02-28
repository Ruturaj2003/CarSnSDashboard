import { useEffect, useState } from 'react';
import DataTable from './DataTable';
import DModal from '../DModal';
import axios from 'axios';
import { useMutation, useQuery, useQueryClient } from 'react-query';

const fetchTableData = async (url) => {
  const response = await axios.get(url);
  return response.data;
};

const deleteItem = async (id, url) => {
  const response = await axios.delete(url + '/' + id);
};

const TableFrame = ({ url, tableHeadings, formName, tableData }) => {
  const [loading, setLoading] = useState(false);
  const [overlayOpen, setOverlayOpen] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [editModalData, setEditModalData] = useState(null);
  const [createModal, setCreateModal] = useState(false);

  const handleDelete = (id, url) => {
    // Call the mutate function with the item ID and URL
    // deleteItemMutation.mutate({ id, url });
  };

  // if (isLoading) {
  //   return <p>Loading...</p>;
  // }

  // if (isError) {
  //   return <p>Error loading data</p>;
  // }

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
                  handleDelete={handleDelete}
                  handleEditModalOpen={handleEditModalOpen}
                  setEditModalData={setEditModalData}
                  data={tableData}
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
              ></DModal>
              {/* Create Modal */}
            </>
          ) : (
            <DataTable
              url={url}
              data={tableData}
              handleModalOpen={handleModalOpen}
              handleEditModalOpen={handleEditModalOpen}
              setEditModalData={setEditModalData}
              handleDelete={handleDelete}
              tableHeadings={tableHeadings}
            ></DataTable>
          )}
        </>
      )}
    </div>
  );
};
export default TableFrame;
