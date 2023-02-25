import { Link,useLocation } from "react-router-dom";
import "./ProductA.css";


import { productData } from "../../../Admin/dummyData/admin_dummy_data";
import { MdPublish } from "react-icons/md";
import Chart from "../../../Admin/Components/chart/chart";
import Topbar from "../../../Admin/Components/topbar/Topbar";
import Sidebar from "../../../Admin/Components/sidebar/sidebar";
import { useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import { userRequest } from "../../../Admin_RequestMethod";

export default function ProductA() {
    const location=useLocation()
    // console.log("location",location)
    const productId=location.pathname.split("/")[3]
    // console.log("id",productId)
    const product=useSelector(state=>state.admin_product.products.find((product)=>product._id===productId))
    console.log("mj",product)
    const[pstats,setProductstat]=useState([])
    
    const MONTHS = useMemo(
        () => [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Agu",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        []
      );

      useEffect(() => {
        const getStats = async () => {
          try {
            const res = await userRequest.get("/order/income?pid="+productId);
            const list=res.data.sort((a,b)=>{
                return a._id - b._id
            })
            list.map((item) =>
            setProductstat((prev) => [
                ...prev,
                { name: MONTHS[item._id - 1], "Active User": item.total },
              ])
            );
          } catch {}
        };
        getStats();
      }, [MONTHS]);

  return (
    <div>
    <Topbar/>
<div style={{display:"flex"}}>

<div  >
<Sidebar />
</div>



<div style={{width:"80%",marginLeft:"20px"}}>
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
          <div className="productTopLeft">
              <Chart data={pstats} dataKey="Sales" title="Sales Performance"/>
          </div>
          <div className="productTopRight">
              <div className="productInfoTop">
                  <img src={product.img[0]} />
                  <span className="productName">{product.title}</span>
              </div>
              <div className="productInfoBottom">
                  <div className="productInfoItem">
                      <span className="productInfoKey">id:</span>
                      <span className="productInfoValue">{product._id}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">sales:</span>
                      <span className="productInfoValue">5123</span>
                  </div>
                  {/* <div className="productInfoItem">
                      <span className="productInfoKey">active:</span>
                      <span className="productInfoValue">yes</span>
                  </div> */}
                  <div className="productInfoItem">
                      <span className="productInfoKey">in stock:</span>
                      <span className="productInfoValue">{product.inStock?"true":"false"}</span>
                  </div>
              </div>
          </div>
      </div>
      <div className="productBottom">
          <form className="productForm">
              <div className="productFormLeft">
                  <label>Product Name</label>
                  <input type="text" placeholder={product.category}/>
                  <label>Product Description</label>
                  <input type="text" placeholder={product.desc}/>
                  <label>Product Price</label>
                  <input type="text" placeholder={product.price}/>
                  <label>In Stock</label>
                  <select name="inStock" id="idStock">
                      <option value="true">Yes</option>
                      <option value="false">No</option>
                  </select>
                  {/* <label>Active</label>
                  <select name="active" id="active">
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                  </select> */}
              </div>
              <div className="productFormRight">
                  <div className="productUpload">
                      <img src={product.img[0]} />
                      <label for="file">
                          <MdPublish/>
                      </label>
                      <input type="file" id="file" style={{display:"none"}} />
                  </div>
                  <button className="productButton">Update</button>
              </div>
          </form>
      </div>
    </div>

    </div>
    </div>
    </div>
  );
}