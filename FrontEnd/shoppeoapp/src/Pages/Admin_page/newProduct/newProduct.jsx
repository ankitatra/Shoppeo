import { useState } from "react";
import Sidebar from "../../../Admin/Components/sidebar/sidebar";
import Topbar from "../../../Admin/Components/topbar/Topbar";
import "./newProduct.css";

export default function NewProduct() {
  const [input,setInput]=useState({})
  const [file,setFile]=useState(null)
  const [img,setimg]=useState([])
  const [size,setsize]=useState([])

  const handleChange=(e)=>{
    setInput(prev=>{
      return {...prev,[e.target.name]:e.target.value}
    })
  }

   const handleSize=(e)=>{
    setsize(e.target.value.split(","))
  }
  const handleClick=(e)=>{
    e.preventDefault()
  }
  const handleImage=(e)=>{}
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
          <input name="img"type="file" id="file" onChange={(e)=>setFile(e.target.files)[0]}/>
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
