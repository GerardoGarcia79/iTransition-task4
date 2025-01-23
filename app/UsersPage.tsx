import React from "react";
import UsersDataTable from "./appComponents/dataTable/UsersDataTable";

const UsersPage = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-10/12 lg:w-3/4">
        <UsersDataTable />
      </div>
    </div>
  );
};

export default UsersPage;
