import TableHeader from './TableHeader';
import TableRow from './TableRow';

const DataTable = ({
  url,
  tableHeadings,
  data,
  handleModalOpen,
  handleEditModalOpen,
  setEditModalData,
  handleDelete,
}) => {
  const handleRowClick = (rowData) => {
    setEditModalData(rowData);
    handleEditModalOpen();
  };
  return (
    <div className="h-full bg-slate-100 overflow-auto">
      <table className="w-full table-fixed shadow-md rounded bg-white">
        <TableHeader
          handleModalOpen={handleModalOpen}
          tableHeadings={tableHeadings}
        />
        <tbody>
          {data.map((item, index) => (
            <TableRow
              handleRowClick={handleRowClick}
              handleDelete={handleDelete}
              key={index}
              item={item}
              url={url}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default DataTable;
