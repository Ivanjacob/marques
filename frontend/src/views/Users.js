import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import Header from './Header.js';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'username', headerName: 'Username', width: 130},
  { field: 'email', headerName: 'Email', width: 130},
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'phone',
    headerName: 'Phone',
    type: 'text',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, username: 'Jonie', email: 'joniesnow@gmail.com', lastName: 'Snow', firstName: 'Jon', phone: '0723456735' },
  { id: 2, username: 'Jonie', email: 'joniesnow@gmail.com', lastName: 'Lannister', firstName: 'Cersei', phone: '0701504590' },
  { id: 3, username: 'Jonie', email: 'joniesnow@gmail.com', lastName: 'Lannister', firstName: 'Jaime', phone: '0712347865' },
  { id: 4, username: 'Jonie', email: 'joniesnow@gmail.com', lastName: 'Stark', firstName: 'Arya', phone: '0701504590' },
  { id: 5, username: 'Jonie', email: 'joniesnow@gmail.com', lastName: 'Targaryen', firstName: 'Daenerys', phone: null },
  { id: 6, username: 'Jonie', email: 'joniesnow@gmail.com', lastName: 'Melisandre', firstName: null, phone: '0701504590' },
  { id: 7, username: 'Jonie', email: 'joniesnow@gmail.com', lastName: 'Clifford', firstName: 'Ferrara', phone: '0708904590' },
  { id: 8, username: 'Jonie', email: 'joniesnow@gmail.com', lastName: 'Frances', firstName: 'Rossini', phone: '0708904590' },
  { id: 9, username: 'Jonie', email: 'joniesnow@gmail.com', lastName: 'Roxie', firstName: 'Harvey', phone: '0712347865' },
  { id: 10, username: 'Jonie', email: 'joniesnow@gmail.com', lastName: 'Roxie', firstName: 'Harvey', phone: null },
  { id: 11, username: 'Jonie', email: 'joniesnow@gmail.com', lastName: 'Roxie', firstName: 'Harvey', phone: '0708904590' },
  { id: 12, username: 'Jonie', email: 'joniesnow@gmail.com', lastName: 'Roxie', firstName: 'Harvey', phone: '0701504590' },
  { id: 13, username: 'Jonie', email: 'joniesnow@gmail.com', lastName: 'Roxie', firstName: 'Harvey', phone: '0701504590' },
  { id: 14, username: 'Jonie', email: 'joniesnow@gmail.com', lastName: 'Roxie', firstName: 'Harvey', phone: '0723456735' },
  { id: 15, username: 'Jonie', email: 'joniesnow@gmail.com', lastName: 'Roxie', firstName: 'Harvey', phone: '0708904590' },
  { id: 16, username: 'Jonie', email: 'joniesnow@gmail.com', lastName: 'Roxie', firstName: 'Harvey', phone: '0712347865' },
  { id: 17, username: 'Jonie', email: 'joniesnow@gmail.com', lastName: 'Roxie', firstName: 'Harvey', phone: '0701504890' },
  { id: 18, username: 'Jonie', email: 'joniesnow@gmail.com', lastName: 'Roxie', firstName: 'Harvey', phone: '0708904590' },
  { id: 19, username: 'Jonie', email: 'joniesnow@gmail.com', lastName: 'Roxie', firstName: 'Harvey', phone: '0723456735' },
  { id: 20, username: 'Jonie', email: 'joniesnow@gmail.com', lastName: 'Roxie', firstName: 'Harvey', phone: '0712347865' },
  
];


export default function Users() {
    const toolbarOptions = ['Search']

    const editing = { allowDeleting: true, allowEditing: true };

  return (
    <div style={{ margin: "2rem", "@media (min-width: 760px)": { margin: "10rem"}, marginTop: "6rem", padding: "0.5rem", "@media (min-width: 768px)": {padding: "2.5rem",}, backgroundColor: "#fff", borderRadius: "1.5rem", }}>
    <Header category="Page" title="Users" />
      <DataGrid
        rows={rows}
        columns={columns}
        width="auto"
        allowPaging
        allowSorting
        toolbarOptions={toolbarOptions}
        editSettings={editing}
        pageSetings={{ pageCount: 5 }}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}
