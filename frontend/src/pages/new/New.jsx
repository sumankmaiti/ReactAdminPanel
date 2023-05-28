import UploadFileIcon from "@mui/icons-material/UploadFile";

import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./new.scss";
import { useState } from "react";

const New = ({ input, title }) => {
  const [file, setFile] = useState("")

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src= {file ? URL.createObjectURL(file) : "https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg"}
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <UploadFileIcon className="icon" />
                </label>
                <input onChange={e=>setFile(e.target.files[0])} type="file" id="file" style={{ display: "none" }} />
              </div>

              {input.map((item) => {
                return (
                  <div className="formInput" key={item.id}>
                    <label>{item.label}</label>
                    <input type={item.type} placeholder={item.placeholder} />
                  </div>
                );
              })}
              {/* <div className="formInput">
                <label>Usename</label>
                <input type="text" placeholder="suman_maiti" />
              </div>

              <div className="formInput">
                <label>Full Name</label>
                <input type="text" placeholder="suman maiti" />
              </div>

              <div className="formInput">
                <label>Email</label>
                <input type="email" placeholder="sumanmaiti@gmail.com" />
              </div>

              <div className="formInput">
                <label>Phone</label>
                <input type="text" placeholder="12345678" />
              </div>

              <div className="formInput">
                <label>Password</label>
                <input type="password" />
              </div>

              <div className="formInput">
                <label>Address</label>
                <input type="text" placeholder="dum dm road, kolkata, wb" />
              </div>

              <div className="formInput">
                <label>Country</label>
                <input type="text" placeholder="India" />
              </div> */}

              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
