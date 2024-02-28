import TableHeader from './TableHeader';
import TableRow from './TableRow';

const DataTable = ({
  url,
  tableHeadings,
  data,
  handleModalOpen,
  handleEditModalOpen,
  setEditModalData,
  fetchFn,
  numOfCol,
}) => {
  const handleRowClick = (rowData) => {
    setEditModalData(rowData);
    handleEditModalOpen();
  };
  const nume = numOfCol;
  return (
    <div className="h-full bg-slate-100 overflow-auto">
      <table className="w-full table-fixed shadow-md rounded bg-white">
        <TableHeader
          handleModalOpen={handleModalOpen}
          tableHeadings={tableHeadings}
        />
        <tbody>
          {data.map((item, index) => {
            // Display only the specified number of attributes
            const displayedItem = {};
            for (let i = 0; i < nume; i++) {
              const attributeKey = Object.keys(item)[i];
              displayedItem[attributeKey] = item[attributeKey];
            }

            return (
              <TableRow
                handleRowClick={handleRowClick}
                key={index}
                item={displayedItem}
                url={url}
                fetchFn={fetchFn}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default DataTable;
