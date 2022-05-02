import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import "./New.scss"
import {useState} from "react"
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import { doc, setDoc } from "firebase/firestore"; 
import { db } from '../../firebase'
const New = ({inputs,title}) => {
  const [file, setFile]=useState("");
  const handleAdd = async(e) => {
    e.preventDefault();
    await setDoc(doc(db, "cities", "LA"), {
      name: "Los Angeles",
      state: "CA",
      country: "USA"
    });
    
  }
  console.log(file);
  return (
    <div className='new'>
      <Sidebar/>
      <div className="newContainer">
        <Navbar/>
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
          <img src={file ? URL.createObjectURL(file): "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"}
          alt="" className="itemImage"/>
          </div>
          <div className="right">
            <form onSubmit={handleAdd}>
              <div className="formInput">
                <label htmlFor="image">Image:<DriveFolderUploadIcon className='icon'/></label>
                <input 
                type="file" id='file' 
                onChange={e=>setFile(e.target.files[0])} 
                // style={{display: "none"}}
                />
              </div>
              { inputs.map((input) => (
                <div className="formInput" key={input.id}>
                <label>{input.label}</label>
                <input type={input.type} placeholder={input.placeholder} />
              </div>
              ))}
             <button type='submit'>Send</button> 
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New