import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";

//fine our columns using mui-datagrid
const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  //define age
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
  //define names
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    // valueGetter: (params) =>
    //   `${params.getValue(params.id, "firstName") || ""} ${
    //     params.getValue(params.id, "lastName") || ""
    //   }`,
  },
];
//end of columns
//define data entries in rows
const rows = [
  {
    id: "1",
    firstName: "John",
    lastName: "Doe",
    age: 32,
  },
  {
    id: "2",
    firstName: "Jane",
    lastName: "Doe",
    age: 28,
  },
  {
    id: "3",
    firstName: "John",
    lastName: "Smith",
    age: 25,
  },
  {
    id: "4",
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
  },
  {
    id: "5",
    firstName: "John",
    lastName: "Doe",
    age: 32,
  },
  {
    id: "6",
    firstName: "Jane",
    lastName: "Doe",
    age: 28,
  },
  {
    id: "7",
    firstName: "John",
    lastName: "Smith",
    age: 25,
  },
  {
    id: "8",
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
  },
  {
    id: "9",
    firstName: "John",
    lastName: "Doe",
    age: 32,
  },
  {
    id: "10",
    firstName: "Jane",
    lastName: "Doe",
    age: 28,
  },
  {
    id: "11",
    firstName: "John",
    lastName: "Smith",
    age: 25,
  },
  {
    id: "12",
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
  },
  { id: 13, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 14, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 15, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 16, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 17, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 18, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 19, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 20, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 21, lastName: "Snow", firstName: "Jon", age: 35 },
];
//end of data entries

export default function UserList() {
  return (
    <div className="user__list">
      {/* call the data grid */}
      <DataGrid rows={rows} columns={columns} pageSize={10} checkboxSelection />
    </div>
  );
}
