const TableHeader = ({ tableHeadings, handleModalOpen }) => {
  return (
    <thead className="font-tableH bg-[#0066AD] text-white sticky top-0">
      <tr>
        {tableHeadings.map((thead, index) => (
          <th key={index} className="py-2 border-r text-center">
            {thead}
          </th>
        ))}
        <th className="w-[140px] bg-[#0066AD] text-center">
          <button onClick={handleModalOpen}>Create</button>
        </th>
      </tr>
    </thead>
  );
};
export default TableHeader;
