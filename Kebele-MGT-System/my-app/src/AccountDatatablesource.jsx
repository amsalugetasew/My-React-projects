import Avater from './Components/Image/profile.jpg'
export const userColumns = [
    // {
    //     field: 'id',
    //     headerName: 'ID',
    //     width: 260
    // },
    {
        field: 'firstName',
        headerName: 'First Name',
        width: 120
    },
    {
        field: 'lastName',
        headerName: 'Last Name',
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