import React, { useEffect, useState} from "react"
import {useNavigate} from "react-router-dom"
import StripeCheckout from "react-stripe-checkout"
import axios from "axios"
import shoppeo from "../asset/Shoppeo.png"
import {toast,ToastContainer} from "react-toastify"
// import "react-toastify/dist/ReactToastify.css"
import 'react-toastify/dist/ReactToastify.css';


export const Pay=()=>{
const KEY="pk_test_51MZU6RSFT5zdEJkdH4zJchJCggEcohivBu8cekPp06UaPQ54UrfkGeaddngwqGk6hRAQtgTFGQSztMfTUoeyz2rn00WbS44ryZ"
const [stripeToken,setStripeToken]=useState(null)
// toast.configure()
const [product]=useState({
    name:"Shopio",
    price:2000,
    description:"Your Total is $20",

})
 const navigate=useNavigate()


 const onToken=async(token,address)=>{
    const response=await axios.post("http://localhost:5000/checkout",{token,product})
    console.log(response.data)
    navigate("/success")
//    if(response.status===200){
//      toast("Success payment is completed",{type:"success"})
//     //  navigate("/success")
//    }else{
//     toast("Failure payment is not completed",{type:"error"})
//    }

}

//  useEffect(()=>{
//     const makeRequest=async()=>{
//         try {
//            const res=await axios.post("http://localhost:5000/api/checkout/payment",
//            {
//             tokenId:stripeToken.id,
//             amount:2000,
//            }
//            );
         
//            console.log(res.data)
//            navigate("/success")
//         } catch (error) {
//             console.log(error)
//         }
//     }
//     stripeToken && makeRequest()
//  },[stripeToken])

    return(
        <div style={{height:"100vh",
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
        }}
        >
            {/* {stripeToken ?(<span>Procession please wait...</span>):( */}
            <StripeCheckout
            name={product.name} 
            image={shoppeo}
            billingAddress
            shippingAddress
            description={product.description}
            amount={product.price*100}
            token={onToken}
            stripeKey={KEY}
            
            >
        
            <button
             style={{
                border:"none",
                width:120,
                borderRadious:5,
                padding:"20px",
                backgroundColor:"black",
                color:"white",
                fontWeight:"600",
                cursor:"pointer"

            }}>
                PayNow

            </button>
            {/* <ToastContainer
    autoClose={5000}
    hideProgressBar={true}
    // {...otherPropsFromToastConfigure}
/> */}
               
            </StripeCheckout>

{/* )}   */}
        </div>
    )
}