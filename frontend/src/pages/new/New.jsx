import UploadFileIcon from "@mui/icons-material/UploadFile";

import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./new.scss";

const New = () => {
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add New User</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src="https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg"
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <UploadFileIcon className="icon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>

              <div className="formInput">
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
              </div>

              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
