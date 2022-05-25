import React, { useEffect } from 'react'
import Navbar from "../../../Components/Admin/Navbar/Navbar"
import Sidebar from "../../../Components/Admin/Sidebar/Sidebar"
import "./New.scss"
import { useState } from "react"
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { auth, db, storage } from '../../../firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate } from 'react-router-dom'

const New = ({ inputs, title, type, users }) => {
  const [file, setFile] = useState("");
  const [data, setData] = useState({});
  const [per, setPer] = useState(null);
  const navigate = useNavigate();

  let datas;
    switch (type) {
        case "user":
            datas = {
                query: "Users"
            };
            break;
            case "family":
            datas = {
                query: "Members"
            };
            break;
        case "order":
            datas = {
                query: "Orders"
            };
            break;
        case "products":
            datas = {
                query: "Products"
            };
            break;
        default:
            break;
    }
    console.log(datas.query);
  useEffect(() => {
    const uploadFile = () => {
      // const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on('state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          setPer(progress);
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setData((prev) => ({ ...prev, img: downloadURL }))
          });
        }
      );


    };
    file && uploadFile()
  }, [file]);
  const handleInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    setData({ ...data, [id]: value })
  }
  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      await setDoc(doc(db, datas.query, res.user.uid), {
        ...data,
        timeStamp: serverTimestamp(),
      });
      navigate(-1);
    }
    catch (errors) {
      console.log(errors)
    }
  }
  return (
    <div className='new'>
      <Sidebar />
      <div className="newContainer">
      <Navbar users={users}/>
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src={file ? URL.createObjectURL(file) : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"}
              alt="" className="itemImage" />
          </div>
          <div className="right">
            <form onSubmit={handleAdd}>
              <div className="formInput">
                <label htmlFor="image">Image:<DriveFolderUploadIcon className='icon' /></label>
                <input
                  type="file" id='file'
                  onChange={e => setFile(e.target.files[0])}
                />
              </div>
              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    id={input.id}
                    type={input.type}
                    placeholder={input.placeholder}
                    onChange={handleInput}
                  />
                </div>
              ))}
              <button disabled={per !== null && per < 100} type="submit">Add Family</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New