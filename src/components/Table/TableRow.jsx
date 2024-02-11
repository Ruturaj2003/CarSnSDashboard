const TableRow = ({ item }) => {
  return (
    <tr>
      {Object.values(item).map((value, index) => (
        <td
          key={nanoid()}
          className="py-2 overflow-hidden overflow-ellipsis text-center"
        >
          {value}
        </td>
      ))}
      <td className="flex justify-evenly py-2 items-center">
        <button key={nanoid()} onClick={handleEdit}>
          <FaEdit className="text-[#797979] text-xl" />
        </button>
        <button key={nanoid()} onClick={() => handleDelete(item.id)}>
          <MdDelete className="text-xl text-[#797979]" />
        </button>
      </td>
    </tr>
  );
};
export default TableRow;
