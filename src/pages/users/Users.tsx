import { GridColDef } from "@mui/x-data-grid";
import DataTable from "../../components/dataTable/DataTable";
import "./users.scss"
import { userRows } from "../../data";
import { useState } from "react";
import Add from "../../components/add/Add";
import { useQuery } from "@tanstack/react-query";

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
  
const Users = () => {

  const { isLoading, data } = useQuery({
    queryKey: ['allusers'],
    queryFn: () =>
      fetch('http://localhost:8800/api/users').then(
        (res) => res.json(),
      ),
  })

  

  const [open, setOpen] = useState(false)

    return ( 
        <div className="users">
            <div className="info">
                <h1>Users</h1>
                <button onClick={()=> setOpen(true)}><span>+</span> Add New User</button>
            </div>
            {isLoading ? "Loading..." : <DataTable slug="users" columns={columns} rows={data}/>}
            {open && <Add slug="user" columns={columns} setOpen={setOpen}/>}
        </div>
     );
}
 
export default Users;