"use client";

import React, { useEffect, useState } from "react";
import { useTable } from "react-table";
// import { useRouter } from "next/na";
import { Bar } from "react-chartjs-2";
import "tailwindcss/tailwind.css";
import { auth, db, storage } from "../config/config.js";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { getDownloadURL, ref } from "firebase/storage";
import { useRouter } from "next/navigation";
import Adminsidenav from "./sidebar'/adminsidenav.js";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
// import { useRouter } from "next/navigation.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Admin = () => {
  const [applications, setApplications] = useState([]);
  const [applicationImages, setApplicationImages] = useState({});
  const [users, setUsers] = useState([]);
  const [contactMessages, setContactMessages] = useState([]);
  const [authData, setAuthData] = useState({});
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const applicationsSnapshot = await getDocs(
          collection(db, "internshipApplications")
        );
        const applicationsData = [];
        const images = {};

        for (const doc of applicationsSnapshot.docs) {
          const data = doc.data();
          const timestamp = data.timestamp?.toDate
            ? data.timestamp.toDate()
            : null;
          const application = {
            id: doc.id,
            ...data,
            timestamp: timestamp || new Date(),
          };
          applicationsData.push(application);
          if (data.photoURL) {
            const imageURL = await getDownloadURL(ref(storage, data.photoURL));
            images[doc.id] = imageURL;
          }
        }

        setApplications(applicationsData);
        setApplicationImages(images);

        const usersSnapshot = await getDocs(collection(db, "users"));
        const usersData = usersSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setUsers(usersData);

        const contactMessagesSnapshot = await getDocs(
          collection(db, "contactMessages")
        );
        const contactMessagesData = contactMessagesSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setContactMessages(contactMessagesData);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchAuthData = async () => {
      const user = auth.currentUser;
      if (user) {
        try {
          const userDoc = await getDoc(doc(db, "users", user.uid));
          if (userDoc.exists) {
            const userData = userDoc.data();
            setAuthData(userData);
          } else {
            console.error("No such user document!");
          }
        } catch (error) {
          console.error("Error fetching auth data: ", error);
        }
      }
    };

    fetchAuthData();
  }, []);

  const applicationColumns = React.useMemo(
    () => [
      {
        Header: "#",
        accessor: "index",
        Cell: ({ row }) => <div>{row.index + 1}</div>,
      },
      { Header: "Name", accessor: "name" },
      { Header: "Email", accessor: "email" },
      { Header: "Mobile", accessor: "mobile" },
      { Header: "Degree", accessor: "degree" },
      { Header: "Fee", accessor: "amount" },
      { Header: "College", accessor: "collegeName" },
      { Header: "Technology", accessor: "technology" },
      { Header: "Training", accessor: "training" },
      {
        Header: "Interests",
        accessor: (row) => {
          const interests = [];
          if (row.interests?.webdev) interests.push("Web Development");
          if (row.interests?.datascience) interests.push("Data Science");
          if (row.interests?.ai) interests.push("Artificial Intelligence");
          if (row.interests?.mobiledev) interests.push("Mobile Development");
          return interests.join(", ");
        },
      },
      {
        Header: "Screenshot",
        accessor: "id",
        Cell: ({ value }) =>
          applicationImages[value] ? (
            <img
              src={applicationImages[value]}
              alt="Application Photo"
              className="w-full h-auto object-contain rounded-lg"
            />
          ) : null,
      },
      {
        Header: "Submitted Date",
        accessor: "timestamp",
        Cell: ({ value }) => {
          if (!value) return "-";
          const date = new Date(value);
          return date.toLocaleString();
        },
        className: "newDataHighlight",
      },
    ],
    [applicationImages]
  );

  const userColumns = React.useMemo(
    () => [
      {
        Header: "#",
        accessor: "index",
        Cell: ({ row }) => <div>{row.index + 1}</div>,
      },
      { Header: "Name", accessor: "name" },
      { Header: "Email", accessor: "email" },
      { Header: "Mobile number", accessor: "mobile" },
      { Header: "Password", accessor: "password" },
      {
        Header: "Time of submitting Data",
        accessor: "timestamp",
        Cell: ({ value }) => {
          if (!value) return "-";
          const date = new Date(value);
          return date.toLocaleString();
        },
        className: "newDataHighlight",
      },
    ],
    []
  );

  const contactMessagesColumns = React.useMemo(
    () => [
      {
        Header: "#",
        accessor: "index",
        Cell: ({ row }) => <div>{row.index + 1}</div>,
      },
      { Header: "Fullname", accessor: "fullName" },
      { Header: "Email", accessor: "email" },
      { Header: "Message", accessor: "message" },
      {
        Header: "Time of Submission",
        accessor: "timestamp",
        Cell: ({ value }) => {
          if (!value) return "-";
          const date = new Date(value);
          return date.toLocaleString();
        },
        className: "newDataHighlight",
      },
    ],
    []
  );

  const {
    getTableProps: getApplicationTableProps,
    getTableBodyProps: getApplicationTableBodyProps,
    headerGroups: applicationHeaderGroups,
    rows: applicationRows,
    prepareRow: prepareApplicationRow,
  } = useTable({ columns: applicationColumns, data: applications });
  const {
    getTableProps: getUserTableProps,
    getTableBodyProps: getUserTableBodyProps,
    headerGroups: userHeaderGroups,
    rows: userRows,
    prepareRow: prepareUserRow,
  } = useTable({ columns: userColumns, data: users });
  const {
    getTableProps: getContactMessagesTableProps,
    getTableBodyProps: getContactMessagesTableBodyProps,
    headerGroups: contactMessagesHeaderGroups,
    rows: contactMessagesRows,
    prepareRow: prepareContactMessageRow,
  } = useTable({ columns: contactMessagesColumns, data: contactMessages });

  const internshipCount = applications.length;
  const userCount = users.length;
  const contactMessagesCount = contactMessages.length;

  const chartData = {
    labels: ["Internship Students", "Registered Users", "Contact Messages"],
    datasets: [
      {
        label: "Count",
        data: [internshipCount, userCount, contactMessagesCount],
        backgroundColor: ["#4CAF50", "#FF9800", "#2196F3"],
      },
    ],
  };

  return (
    <>
      <div className="flex flex-col md:flex-row min-h-screen">
        <div className="w-full z-10 min-h-screen md:w-[10%]">
          <Adminsidenav />
        </div>
        <div className="w-full md:w-[90%] bg-gray-50 flex flex-col pt-24 px-4 md:px-6">
          <main className="flex-grow mx-auto space-y-12 mt-16 w-full max-w-7xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white shadow-lg rounded-xl p-6 border-l-4 border-blue-500">
                <h3 className="text-lg font-semibold text-gray-700">
                  Internship Students
                </h3>
                <p className="text-3xl font-bold text-blue-600">
                  {internshipCount}
                </p>
              </div>
              <div className="bg-white shadow-lg rounded-xl p-6 border-l-4 border-green-500">
                <h3 className="text-lg font-semibold text-gray-700">
                  Registered Users
                </h3>
                <p className="text-3xl font-bold text-green-600">{userCount}</p>
              </div>
              <div className="bg-white shadow-lg rounded-xl p-6 border-l-4 border-indigo-500">
                <h3 className="text-lg font-semibold text-gray-700">
                  Contact Messages
                </h3>
                <p className="text-3xl font-bold text-indigo-600">
                  {contactMessagesCount}
                </p>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-xl p-6">
              <h2 className="text-2xl font-bold text-gray-700 mb-4">
                Data Overview
              </h2>
              <Bar data={chartData} />
            </div>
            <section className="bg-white shadow-lg rounded-xl p-6 overflow-x-auto">
              <h2 className="text-2xl font-bold mb-4 text-gray-700">
                Internship Applications
              </h2>
              <table className="w-full border-collapse border border-gray-200 rounded-lg">
                <thead className="bg-gray-100">
                  {applicationHeaderGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map((column) => (
                        <th
                          {...column.getHeaderProps()}
                          className="px-2 py-3 text-xs font-medium text-gray-600 uppercase"
                        >
                          {column.render("Header")}
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {applicationRows.map((row) => {
                    prepareApplicationRow(row);
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
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </section>
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

            {/* Contact Messages */}
            <section className="bg-white shadow-lg rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-700">
                Contact Messages
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-200 rounded-lg">
                  <thead className="bg-gray-100">
                    {contactMessagesHeaderGroups.map((headerGroup) => (
                      <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                          <th
                            {...column.getHeaderProps()}
                            className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase"
                          >
                            {column.render("Header")}
                          </th>
                        ))}
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">
                          Actions
                        </th>
                      </tr>
                    ))}
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {contactMessagesRows.map((row) => {
                      prepareContactMessageRow(row);
                      return (
                        <tr {...row.getRowProps()} className="hover:bg-gray-50">
                          {row.cells.map((cell) => (
                            <td
                              {...cell.getCellProps()}
                              className="px-6 py-4 text-sm text-gray-700"
                            >
                              {cell.render("Cell")}
                            </td>
                          ))}
                          <td className="px-6 py-4 text-sm text-gray-700 flex ">
                            <button
                              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                              onClick={() => handleEdit(row.original.id)} // Replace with your edit function and pass appropriate row data
                            >
                              Edit
                            </button>
                            <button
                              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                              onClick={() => handleDelete(row.original.id)} // Replace with your delete function and pass appropriate row data
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
};

export default Admin;
