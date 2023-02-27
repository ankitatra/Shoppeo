import { useState } from "react";
import Sidebar from "../../../Admin/Components/sidebar/sidebar";
import Topbar from "../../../Admin/Components/topbar/Topbar";
import{addProduct} from "../../../redux/apiCalls"
import "./newProduct.css";
import { useDispatch } from "react-redux";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../../firebase";
// import app from "../../firebase"
export default function NewProduct() {
  const [input,setInput]=useState({})
  const [file,setFile]=useState(null)
  const [img,setimg]=useState([])
  const [size,setsize]=useState([])
  const dispatch=useDispatch()
  const handleChange=(e)=>{
    setInput(prev=>{
      return {...prev,[e.target.name]:e.target.value}
    })
  }

   const handleSize=(e)=>{
    setsize(e.target.value.split(","))
  }
 
  const handleimage=(e)=>{
    setimg(e.target.value.split(","))
  }
  console.log(input)
 const handleClick=(e)=>{
  e.preventDefault()
  const product={...input,img,size}
  addProduct(product,dispatch)
 }

  // const handleClick = (e) => {
  //   e.preventDefault();
  //   const fileName = new Date().getTime() + file.name;
  //   const storage = getStorage(app);
  //   const storageRef = ref(storage, fileName);
  //   const uploadTask = uploadBytesResumable(storageRef, file);

  //   // Register three observers:
  //   // 1. 'state_changed' observer, called any time the state changes
  //   // 2. Error observer, called on failure
  //   // 3. Completion observer, called on successful completion
  //   uploadTask.on(
  //     "state_changed",
  //     (snapshot) => {
  //       // Observe state change events such as progress, pause, and resume
  //       // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
  //       const progress =
  //         (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //       console.log("Upload is " + progress + "% done");
  //       switch (snapshot.state) {
  //         case "paused":
  //           console.log("Upload is paused");
  //           break;
  //         case "running":
  //           console.log("Upload is running");
  //           break;
  //         default:
  //       }
  //     },
  //     (error) => {
  //       // Handle unsuccessful uploads
  //     },
  //     () => {
  //       // Handle successful uploads on complete
  //       // For instance, get the download URL: https://firebasestorage.googleapis.com/...
  //       getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
  //         console.log("ggsgd",downloadURL)
  //         // const product = { ...input, img: downloadURL, categories: cat };
  //         // addProduct(product, dispatch);
  //       });
  //     }
  //   );
  // };
  console.log(input)

  return (
    
    <div>
    <Topbar/>
<div style={{display:"flex"}}>

<div  >
<Sidebar />
</div>



<div style={{width:"80%",marginLeft:"20px"}}>

    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input name="img"type="text" id="file" onChange={handleimage}/>
        </div>
        <div className="addProductItem">
          <label>Title</label>
          <input name="title" type="text" placeholder="Title" onChange={handleChange}/>
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input name="desc" type="text" placeholder="Description" onChange={handleChange} />
        </div>
        <div className="addProductItem">
          <label>Category</label>
          <input name="category" type="text" placeholder="Category" onChange={handleChange}/>
        </div>
        <div className="addProductItem">
          <label>Subtitle</label>
          <input name="subtitle" type="text" placeholder="Subtitle" onChange={handleChange}/>
        </div>
        <div className="addProductItem">
          <label>Genre</label>
          <input name="genre" type="text" placeholder="Genre" onChange={handleChange}/>
        </div>
        <div className="addProductItem">
          <label>Size</label>
          <input name="size" type="text" placeholder="size" onChange={handleSize}/>
        </div>
        <div className="addProductItem">
          <label>Color</label>
          <input name="color" type="text" placeholder="color" onChange={handleChange} />
        </div>
        <div className="addProductItem">
          <label>Price</label>
          <input name="price" type="number" placeholder="price" onChange={handleChange} />
        </div>
        <div className="addProductItem">
          <label>Descount</label>
          <input name="descount" type="number" placeholder="Discout"  onChange={handleChange}/>
        </div>
        
        <div className="addProductItem">
          <label>Stock</label>
          <select name="inStock" onChange={handleChange}>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <button onClick={handleClick}className="addProductButton">Create</button>
      </form>
    </div>

    
    </div>
    </div>
    </div>
  );
}
