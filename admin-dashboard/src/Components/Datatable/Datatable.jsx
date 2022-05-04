import './Datatable.scss'
import { DataGrid } from '@mui/x-data-grid';
import { userRows, userColumns } from '../../datatablesource';
import { Link } from "react-router-dom"
import { collection, getDocs } from "firebase/firestore";
import {useState, useEffect} from "react";
import {db} from "../../firebase"
const Datatable = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async() => {
            let list = []
           try{ const querySnapshot = await getDocs(collection(db, "Users"));
            querySnapshot.forEach((doc) => {
                list.push(doc)
            });
            setData(list);
        }
        catch(err)
        {
                console.log(err);
            }
        };
        fetchData()
    }, []);
    console.log(data);
    const actionColumn = [
        {
            field: 'action',
            headerName: 'Action',
            width: 200,
            renderCell: () => {
                return (
                    <div className="cellAction">
                        <Link to="/users/test" style={{ textDecoration: "none" }}>
                            <div className="viewButton">View</div>
                        </Link>
                        <div className="editButton">Edit</div>
                        <div className="deleteButton">Delete</div>
                    </div>
                )
            }
        },
    ]
    return (
        <div className='datatable'>
            <div className="dataTableTitle">
                Add New Users
                <Link className='link' to="/users/new" style={{ textDecoration: "none" }}>
                    Add New
                </Link>
            </div>
            <DataGrid className='dataGrid'
                rows={userRows}
                columns={userColumns.concat(actionColumn)}
                pageSize={7}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    )
}

export default Datatable
