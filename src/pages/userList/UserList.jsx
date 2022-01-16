import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { userRows } from "../../dummyData";
import { useState } from "react";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function UserList() {
  //fine our columns using mui-datagrid
  const userColumns = [
    // id colmun
    {
      field: "id",
      headerName: "ID",
      width: 95,
    },
    // username colmun renderCell function to render the avatar and the username
    {
      field: "user",
      headerName: "User",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="user__list-user">
            <img
              src={params.row.avatar}
              alt="avatar"
              className="user__list-image"
              // style={{ width: "30px", height: "30px" }}
            />
            {params.row.username}
          </div>
        );
      },
    },
    // email colmun
    {
      field: "email",
      headerName: "Email",
      width: 170,
    },
    // email colmun
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    //transaction colmun
    {
      field: "transaction",
      headerName: "Transaction",
      width: 160,
    },
    //action columns and renderCell function to render the action buttons edit and delete
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            {/* create a link button that links to user page with their ID inlcuded */}
            <Link to={"/user/" + params.row.id} className="btn btn-link">
              <button className="user__list-edit ">Edit</button>
            </Link>
            <DeleteOutline
              className="user__list-deleteIcon"
              //if user id is available then call the deleteUser function
              onClick={() => {
                if (params.row.id) {
                  deleteUser(params.row.id);
                }
              }}
            />
          </>
        );
      },
    },
    //
    // full names column
    // {
    //   field: "fullName",
    //   headerName: "Full name",
    //   description: "This column has a value getter and is not sortable.",
    //   sortable: false,
    //   width: 160,
    // get username and lastName by id and concat them together else return null
    //   valueGetter: (params) =>
    //     `${params.getValue(params.id, "username") || ""}
    //     ${params.getValue(params.id, "lastName") || ""}
    //     `,
    // },
  ];
  //end of columns

  //a function that delete a user from the list when the delete button is clicked with useState hook
  const [data, setData] = useState(userRows);
  //create a delete function that will delete a user from the list and send it to dummyData.js
  const deleteUser = (id) => {
    const newData = data.filter((userItem) => userItem.id !== id);
    setData(newData);
  };

  return (
    <div className="user__list">
      {/* call the data grid and disable selection of box when click on item (disableSelectionOnClick)*/}
      <DataGrid
        //use userRows and userColumns from dummyData
        //instead of using the userRows we can use the data (default = userRows) from the useState hook
        rows={data}
        columns={userColumns}
        pageSize={10}
        disableSelectionOnClick
        checkboxSelection
      />
    </div>
  );
}
