import './Datatable.scss'
import { DataGrid } from '@mui/x-data-grid';
import { userColumns } from '../../../Admin/datatablesource';
// import { userColumns } from '../../AccountDatatablesource';
import { Link } from "react-router-dom"
import { collection, doc, deleteDoc, onSnapshot, updateDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from '../../../firebase';
const Datatable = ({ title, link, type }) => {
    const [users, setUsers] = useState([]);
    // const [colms, setColms] = useState([]);
    let data;
    // let columnss = [];
    switch (type) {
        case "family":
            data = {
                query: "Members"
            };
            break;
        case "user":
            data = {
                query: "Users"
            };
            break;
        case "order":
            data = {
                query: "Orders"
            };
            break;
        case "products":
            data = {
                query: "Products"
            };
            break;
        default:
            break;
    }
    // console.log(columnss);
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

    // const statues = async (id, Age) => {
    //     const userDoc = doc(db, data.query, id)
    //     const newFields = { Age: Age }
    //     await updateDoc(userDoc, newFields)
    //     console.log(userDoc);
    // }
    const actionColumn = [
        {
            field: 'action',
            headerName: 'Action',
            width: 350,
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
                                        <button className='editButton' onClick={() => { updateUser(user.id, user.Age) }}>Activate</button>
                                        <button className='deleteButton' onClick={() => { deleteUser(user.id) }}>DeActivate</button>
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

    // const [hasAcount, setHasAcount] = useState("Active");
    // const handleSignup = (e) => { }
    // const handleLogin = (e) => { }
    // const handleOnchange = (e) => {
    //     if (hasAcount === "Active") {
    //         console.log(hasAcount);
    //     }
    //     else {
    //         console.log("Passive");
    //     }

    // }
    // useEffect(() => {
    //     handleOnchange();
    //     // {
    //     //     const x= users.map((user) => { { statues(user.id, user.Age) }});
    //     //     console.log(x);
    //     // }
    // }, []);

    return (

        <div className='datatable'>


            {/* {hasAcount ? (
                <>
                    <button onClick={handleSignup}>Sing Un</button>
                    <button>Have an account ? <span onClick={() => setHasAcount(!hasAcount)}>Sign In</span></button>
                </>
            ) : (
                <>
                    <button onClick={handleLogin}>Sign In</button>
                    <p>Don't have an account ?<button onClick={() => setHasAcount(!hasAcount)}>Sign Up</button></p>
                </>
            )} */}

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