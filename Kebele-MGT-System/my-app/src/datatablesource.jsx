import Avater from './Components/Image/profile.jpg'
export const userColumns = [
    {
        field: 'id',
        headerName: 'ID',
        width: 260
    },
    {
        field: 'userName',
        headerName: 'User Name',
        width: 120
    },
    {
        field: 'displayName',
        headerName: 'Full Name',
        width: 130
    },
    {
        field: 'email',
        headerName: 'Email',
        width: 223
    },
    {
        field: 'phone',
        headerName: "Phone Number",
        width: 130
    },
    {
        field: 'country',
        headerName: 'Country',
        width: 80
    },
    {
        field: 'address',
        headerName: "Address",
        width: 70
    },
    {
        field: 'img',
        headerName: "profile pictuter",
        width: 50
    },
    {
        field: 'profile',
        headerName: 'Profile Picture',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 50,
        renderCell: (params) => {
            return (
                <>
                    <img src={Avater} className="avater" alt='' />
                </>
            );
        },
    },
    {
        field: 'status',
        headerName: 'Status',
        width: 60,
        renderCell: (params) => {
            return (
                <div className="celWidthStatus" id={params.row.status}>{params.row.status}</div>
            )
        }
    },
 ]
 export const orderColumns = [
    {
        field: 'id',
        headerName: 'ID',
        width: 260
    },
    {
        field: 'title',
        headerName: 'Product Name',
        width: 120
    },
    {
        field: 'price',
        headerName: 'Product Price',
        width: 130
    },
    {
        field: 'profile',
        headerName: 'Profile Picture',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 50,
        renderCell: (params) => {
            return (
                <>
                    <img src={Avater} className="avater" alt='' />
                </>
            );
        },
    },
    {
        field: 'status',
        headerName: 'Status',
        width: 60,
        renderCell: (params) => {
            return (
                <div className="celWidthStatus" id={params.row.status}>{params.row.status}</div>
            )
        }
    },
 ]

 export const productColumns = [
    {
        field: 'id',
        headerName: 'ID',
        width: 260
    },
    {
        field: 'title',
        headerName: 'Product Name',
        width: 120
    },
    {
        field: 'price',
        headerName: 'Product Price',
        width: 130
    },
    {
        field: 'profile',
        headerName: 'Profile Picture',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 50,
        renderCell: (params) => {
            return (
                <>
                    <img src={Avater} className="avater" alt='' />
                </>
            );
        },
    },
    {
        field: 'status',
        headerName: 'Status',
        width: 60,
        renderCell: (params) => {
            return (
                <div className="celWidthStatus" id={params.row.status}>{params.row.status}</div>
            )
        }
    },
 ]
// export const userRows = [
//     { id: 1, lastName: 'Amsalu', firstName: 'Awoke', age: 24, status: 'Active', edit: '+', delete: '-' },
//     { id: 2, lastName: 'Gizachew', firstName: 'Abibual', age: 28, status: 'Pending', edit: '+', delete: '-' },
//     { id: 3, lastName: 'Tadesse', firstName: 'Getachew', age: 28, status: 'Passive', edit: '+', delete: '-' },
//     { id: 4, lastName: 'Eshetie', firstName: 'Tewodros', age: 26, status: 'Pending', edit: '+', delete: '-' },
//     { id: 5, lastName: 'Gizaw', firstName: 'Tilahun', age: 26, status: 'Active', edit: '+', delete: '-' },
//     { id: 6, lastName: 'Mulat', firstName: 'Mequanint', age: 26, status: 'Passive', edit: '+', delete: '-' },
//     { id: 7, lastName: 'Muche', firstName: 'Mulu', age: 28, status: 'Active', edit: '+', delete: '-' },
//     { id: 8, lastName: 'Amsalu', firstName: 'Getasew', age: 28, status: 'Pending', edit: '+', delete: '-' },
//     { id: 9, lastName: 'Amsalu', firstName: 'Belaynesh', age: 24, status: 'Active', edit: '+', delete: '-' },

// ];