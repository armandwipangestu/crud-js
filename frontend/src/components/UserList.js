import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const UserList = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/users");
    setUser(response.data);
  };
  //   console.log(users);

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/users/${id}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  // return (
  //   <div className="columns mt-5 is-centered">
  //     <div className="column is-half">
  //       <Link to={`add`} className="button is-success">
  //         Add New
  //       </Link>
  //       <table className="table is-striped is-fullwidth">
  //         <thead>
  //           <tr>
  //             <th>No.</th>
  //             <th>Name</th>
  //             <th>Email</th>
  //             <th>Gender</th>
  //             <th>Actions</th>
  //           </tr>
  //         </thead>
  //         <tbody>
  //           {users.map((user, index) => (
  //             <tr key={user.id}>
  //               <td>{index + 1}</td>
  //               <td>{user.name}</td>
  //               <td>{user.email}</td>
  //               <td>{user.gender}</td>
  //               <td>
  //                 <Link
  //                   to={`edit/${user.id}`}
  //                   className="button is-small is-info mr-2"
  //                 >
  //                   Edit
  //                 </Link>
  //                 <button
  //                   onClick={() => {
  //                     deleteUser(user.id);
  //                   }}
  //                   className="button is-small is-danger"
  //                 >
  //                   Delete
  //                 </button>
  //               </td>
  //             </tr>
  //           ))}
  //         </tbody>
  //       </table>
  //     </div>
  //   </div>
  // );

  return (
    <div class="mt-5 overflow-x-auto relative shadow-md sm:rounded-lg px-10 mb-10">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <caption class="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
          <Link to={`add`} className="">
            <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
              <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Add New
              </span>
            </button>
          </Link>
        </caption>
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="py-3 px-6">
              No
            </th>
            <th scope="col" class="py-3 px-6">
              Name
            </th>
            <th scope="col" class="py-3 px-6">
              Email
            </th>
            <th scope="col" class="py-3 px-6">
              Gender
            </th>
            <th scope="col" class="py-3 px-6">
              {/* <span class="sr-only">Edit</span> */}
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr
              key={user.id}
              class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {index + 1}
              </th>
              <td class="py-4 px-6">{user.name}</td>
              <td class="py-4 px-6">{user.email}</td>
              <td class="py-4 px-6">{user.gender}</td>
              <td class="py-4 px-6">
                <Link to={`edit/${user.id}`} className="">
                  <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                    <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      Edit
                    </span>
                  </button>
                </Link>
                <button
                  onClick={() => deleteUser(user.id)}
                  class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
                >
                  <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Delete
                  </span>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
