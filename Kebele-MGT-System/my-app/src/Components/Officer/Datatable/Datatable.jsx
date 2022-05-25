import './Datatable.scss'
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, productColumns, orderColumns } from '../../datatablesource';
import { Link } from "react-router-dom"
import { collection, doc, deleteDoc, onSnapshot, updateDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "../../firebase"
const Datatable = ({ title, link, type }) => {
    const [users, setUsers] = useState([]);
    // const [colms, setColms] = useState([]);
    let data;
    let columnss = [];
    switch (type) {
        case "family":
            data = {
                query: "Members"
            };
            break;
        case "user":            
            columnss = {
                columnss: { userColumns }
            }
            data = {
                query: "Users"
            };
            break;
        case "order":
            columnss = {
                columnss: { orderColumns }
            }
            data = {
                query: "Orders"
            };
            break;
        case "products":
            columnss = {
                columnss: { productColumns }
            }
            data = {
                query: "Products"
            };
            break;
        default:
            break;
    }
    console.log(columnss);
    // setColms(columnss);
    useEffect(() => {
        //listen (Real time data)
        const unsub = onSnapshot(collection(db, data.query), (snapshot) => {
            let list = [];
            snapshot.docs.forEach((doc) => {
                list.push({ id: doc.id, ...doc.data() });
            });
            setUsers(list);
            // console.log("Current data: ", doc.data());
        }, (err) => {
        });
        return () => {
            unsub();
        };
    }, [data]);
    const deleteUser = (id) => {
        try {
            deleteDoc(doc(db, data.query, id));
            setUsers(doc.data.filter((item) => item.id !== id));
        } catch (err) {
            console.log(err);
        }
    }
    const updateUser = async (id, Age) => {
        const userDoc = doc(db, data.query, id)
        const newFields = { Age: Age + 1 }
        await updateDoc(userDoc, newFields)
    }
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
                        {
                            users.map((user) => {
                                return (
                                    <>
                                        <button className='editButton' onClick={() => { updateUser(user.id, user.Age) }}>Edit</button>
                                        <button className='deleteButton' onClick={() => { deleteUser(user.id) }}>Delete</button>
                                    </>
                                );
                            })
                        }
                    </div>
                )
            }
        },
    ]
    return (
        <div className='datatable'>
            <div className="dataTableTitle">
                {title}
                <Link className='link' to={link} style={{ textDecoration: "none" }}>
                    Add New
                </Link>
            </div>
            <DataGrid className='dataGrid'
                rows={users}
                columns={userColumns.concat(actionColumn)}
                pageSize={7}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    );
}

export default Datatable