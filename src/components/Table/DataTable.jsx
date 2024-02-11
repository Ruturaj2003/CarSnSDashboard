import TableHeader from './TableHeader';
import TableRow from './TableRow';

const DataTable = ({
  tableHeadings,
  data,
  handleModalOpen,
  handleEditModalOpen,
  setEditModalData,
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
            <TableRow handleRowClick key={index} item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default DataTable;
