import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";

import { userColumns } from "../../datatablesource.js";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  collection,
  getDocs,
  doc,
  deleteDoc,
  onSnapshot,
} from "firebase/firestore";

import { db } from "../../firebase";

const Datatable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const querySnapshot = await getDocs(collection(db, "users"));
        const unsub = onSnapshot(collection(db, "users"), (querySnapshot) => {
			let list = [];
          	querySnapshot.docs.forEach((doc) => {
            list.push({ id: doc.id, ...doc.data() });
          });
          console.log(list);
          setData(list);
        },
		(error) => {
			console.log(error);
		});

		return () => {
			unsub()
		}
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "users", id));
      setData(data.filter((item) => item.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="test" style={{ textDecoration: "none" }}>
              <div className="viewButton"> View </div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              {" "}
              Delete{" "}
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="DatatableTitle">
        Add New user
        <Link to="/users/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={5}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
