import UploadFileIcon from "@mui/icons-material/UploadFile";
import { useEffect, useState } from "react";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";

import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./new.scss";
import { db, auth, storage } from "../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const New = ({ input, title }) => {
	const [file, setFile] = useState("")
	const [data, setData] = useState({})

	useEffect(() => {
		const name = new Date().getTime() + file.name
		const spaceRef = ref(storage, name);
		const uploadTask = uploadBytesResumable(spaceRef, file);

		uploadTask.on('state_changed',
			(snapshot) => {
				const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
				console.log('Upload is ' + progress + '% done');
				switch (snapshot.state) {
					case 'paused':
						console.log('Upload is paused');
						break;
					case 'running':
						console.log('Upload is running');
						break;
					default:
						break
				}
			},
			(error) => {
				console.log(error);
			},
			() => {
				getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
					setData((prev) => ({...prev, img: downloadURL}))
				});
			}
		);
	}, [file])

	const handleData = (e) => {
		const id = e.target.id
		const value = e.target.value
		setData({ ...data, [id]: value })
	}

	console.log(data);

	const handleAdd = async (e) => {
		e.preventDefault()

		try {
			const res = await createUserWithEmailAndPassword(auth, data.email, data.password)
			await setDoc(doc(db, "users", res.user.uid), {
				...data,
				timeStamp: serverTimestamp()
			});
		}
		catch (err) {
			console.log(err);
		}

	}

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
							src={file ? URL.createObjectURL(file) : "https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg"}
							alt=""
						/>
					</div>
					<div className="right">
						<form onSubmit={handleAdd}>
							<div className="formInput">
								<label htmlFor="file">
									Image: <UploadFileIcon className="icon" />
								</label>
								<input onChange={e => setFile(e.target.files[0])} type="file" id="file" style={{ display: "none" }} />
							</div>

							{input.map((item) => {
								return (
									<div className="formInput" key={item.id}>
										<label>{item.label}</label>
										<input id={item.id} type={item.type} placeholder={item.placeholder} onChange={handleData} />
									</div>
								);
							})}
							<button type="submit">Send</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default New;
