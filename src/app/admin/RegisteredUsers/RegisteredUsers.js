import React from "react";

const RegisteredUsers = () => {
  return (
    <div>
      <section className="bg-white shadow-lg rounded-xl p-3 overflow-x-auto">
        <h2 className="text-2xl font-bold mb-4 text-gray-700">
          Registered Users
        </h2>
        <table className="w-full min-w-max border-collapse border border-gray-200 rounded-lg">
          <thead className="bg-gray-100">
            {userHeaderGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps()}
                    className="px-4 py-3 text-xs font-medium text-gray-600 uppercase"
                  >
                    {column.render("Header")}
                  </th>
                ))}
                <th className="px-4 py-3 text-xs font-medium text-gray-600 uppercase">
                  Actions
                </th>
              </tr>
            ))}
          </thead>
          <tbody className="divide-y divide-gray-200">
            {userRows.map((row) => {
              prepareUserRow(row);
              return (
                <tr {...row.getRowProps()} className="hover:bg-gray-50">
                  {row.cells.map((cell) => (
                    <td
                      {...cell.getCellProps()}
                      className="px-4 py-4 text-sm text-gray-700"
                    >
                      {cell.render("Cell")}
                    </td>
                  ))}
                  <td className="px-4 py-4 text-sm text-gray-700 flex gap-2">
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded text-xs"
                      onClick={() => handleEdit(row.original.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded text-xs"
                      onClick={() => handleDelete(row.original.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default RegisteredUsers;
