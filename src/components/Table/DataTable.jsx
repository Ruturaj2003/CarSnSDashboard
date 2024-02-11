const DataTable = ({ tableHeadings, data }) => {
  return (
    <div className="h-full bg-slate-100 overflow-auto">
      <table className="w-full table-fixed shadow-md rounded bg-white">
        <TableHeader tableHeadings={tableHeadings} />
        <tbody>
          {data.map((item, index) => (
            <TableRow key={index} item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default DataTable;
