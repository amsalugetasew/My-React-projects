import Avater from './Image/profile.jpg'
export const userColumns = [
    {
        field: 'id',
        headerName: 'ID',
        width: 10
    },
    {
        field: 'firstName',
        headerName: 'First name',
        width: 80
    },
    {
        field: 'lastName',
        headerName: 'Last name',
        width: 80
    },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 50
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
    {
        field: 'profile',
        headerName: 'Profile Picture',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 60,
        renderCell: (params) => {
            return (
                <>
                    <img src={Avater} className="avater" alt='' />
                </>
            );
        },
    },
    {
        field: 'email',
        headerName: 'Email',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 250,
        renderCell: (params) => {
            return (
                <>
                    <span className='whitespace'>{params.row.lastName} </span>{'.'}
                    <p>{params.row.firstName}</p>
                    <span>@gmail.com</span>
                </>
            );
        },
    },
    {
        field: 'status',
        headerName: 'Status',
        width: 100,
        renderCell: (params) => {
            return (
                <div className="celWidthStatus" id={params.row.status}>{params.row.status}</div>
            )
        }
    },
    //     {field: 'edit', 
    //     headerName: 'Edit', 
    //     width: 100,
    //     renderCell: (parms)=>{
    //         return(
    //             <div className="celWidthEdit">{parms.row.edit}</div>
    //         )
    //     }
    // },
    // {field: 'delete',
    // headerName: 'Delete',
    //  width: 100,
    //  renderCell: (parms)=>{
    //     return(
    //         <div className="celWidthDelet">{parms.row.delete}</div>
    //     )
    // }
    // },
]
export const userRows = [
    { id: 1, lastName: 'Amsalu', firstName: 'Awoke', age: 24, status: 'Active', edit: '+', delete: '-' },
    { id: 2, lastName: 'Gizachew', firstName: 'Abibual', age: 28, status: 'Pending', edit: '+', delete: '-' },
    { id: 3, lastName: 'Tadesse', firstName: 'Getachew', age: 28, status: 'Passive', edit: '+', delete: '-' },
    { id: 4, lastName: 'Eshetie', firstName: 'Tewodros', age: 26, status: 'Pending', edit: '+', delete: '-' },
    { id: 5, lastName: 'Gizaw', firstName: 'Tilahun', age: 26, status: 'Active', edit: '+', delete: '-' },
    { id: 6, lastName: 'Mulat', firstName: 'Mequanint', age: 26, status: 'Passive', edit: '+', delete: '-' },
    { id: 7, lastName: 'Muche', firstName: 'Mulu', age: 28, status: 'Active', edit: '+', delete: '-' },
    { id: 8, lastName: 'Amsalu', firstName: 'Getasew', age: 28, status: 'Pending', edit: '+', delete: '-' },
    { id: 9, lastName: 'Amsalu', firstName: 'Belaynesh', age: 24, status: 'Active', edit: '+', delete: '-' },

];