import "./productList.css";
import { DataGrid } from "@material-ui/data-grid";
import { productRows } from "../../dummyData";
import { useState } from "react";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function ProductList() {
  //a function that delete a user from the list when the delete button is clicked with useState hook
  const [data, setData] = useState(productRows);

  //create a delete function that will delete a user from the list and send it to dummyData.js
  const deleteUser = (id) => {
    const newData = data.filter((userItem) => userItem.id !== id);
    setData(newData);
  };

  //fine our columns using mui-datagrid
  const productColumns = [
    // id colmun
    {
      field: "id",
      headerName: "ID",
      width: 95,
    },
    // username colmun renderCell function to render the avatar and the username
    {
      field: "product",
      headerName: "Product",
      width: 250,
      renderCell: (params) => {
        return (
          <div className="product__list-item">
            <img
              src={params.row.img}
              alt="img"
              className="product__list-image"
              // style={{ width: "30px", height: "30px" }}
            />
            {params.row.name}
          </div>
        );
      },
    },
    // email colmun
    {
      field: "stock",
      headerName: "Stock",
      // align: "center",
      width: 120,
    },
    // email colmun
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    //transaction colmun
    {
      field: "price",
      headerName: "Price",
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
            {/* add userId and the end of the page Link to user page (from the App component) */}
            <Link to={"/product/" + params.row.id} className="btn-link">
              <button className="product__list-edit ">Edit</button>
            </Link>
            <DeleteOutline
              className="product__list-deleteIcon"
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
  ];
  //end of columns

  return (
    <div className="product__list">
      {/* call the data grid and disable selection of box when click on item (disableSelectionOnClick)*/}
      <DataGrid
        //use userRows and userColumns from dummyData
        //instead of using the userRows we can use the data (default = userRows) from the useState hook
        rows={data}
        columns={productColumns}
        pageSize={10}
        disableSelectionOnClick
        checkboxSelection
      />
    </div>
  );
}
