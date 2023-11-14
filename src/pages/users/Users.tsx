import { GridColDef } from "@mui/x-data-grid";
import DataTable from "../../components/dataTable/DataTable";
import "./users.scss"
import { userRows } from "../../data";

const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 40 },
    {
      field: "img",
      headerName: "Avatar",
      width: 80,
      renderCell: (params) => {
        return <img src={params.row.img || "/noavatar.png"} alt="" />;
      },
    },
    {
      field: "firstName",
      type: "string",
      headerName: "First name",
      width: 100,
    },
    {
      field: "lastName",
      type: "string",
      headerName: "Last name",
      width: 120,
    },
    {
      field: "email",
      type: "string",
      headerName: "Email",
      width: 200,
    },
    {
      field: "phone",
      type: "string",
      headerName: "Phone",
      width: 120,
    },
    {
      field: "createdAt",
      headerName: "Created At",
      width: 100,
      type: "string",
    },
    {
      field: "verified",
      headerName: "Verified",
      width: 100,
      type: "boolean",
    },
  ];
  
  
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, status: true },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];


const Users = () => {
    return ( 
        <div className="users">
            <div className="info">
                <h1>Users</h1>
                <button><span>+</span> Add New User</button>
            </div>
            <DataTable slug="users" columns={columns} rows={userRows}/>
        </div>
     );
}
 
export default Users;