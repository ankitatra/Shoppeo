import { loginFailure,loginStart,loginSuccess } from "./userRedux"
// import{pulblicRequest,userRequset} from "../requestMethod"
import {
    getProductFailure,
    getProductStart,
    getProductSuccess,
    deleteProductFailure,
    deleteProductStart,
    deleteProductSuccess,
    updateProductFailure,
    updateProductStart,
    updateProductSuccess,
    addProductFailure,
    addProductStart,
    addProductSuccess,
  } from "./Admin_ProductRedux";
import { pulblicRequest, userRequest } from "../Admin_RequestMethod";
import axios from "axios";
export const login=async(dispatch,user)=>{
    dispatch(loginStart())
    try {
        const res=await pulblicRequest.post("/auth/login",user)
        dispatch(loginSuccess(res.data))
        console.log(res.data)
    } catch (error) {
        dispatch(loginFailure())
    }
}

export const getProducts = async (dispatch) => {
    dispatch(getProductStart());
    try {
      const res = await pulblicRequest.get("/product");
      dispatch(getProductSuccess(res.data));
    } catch (err) {
      dispatch(getProductFailure());
    }
  };
  
  export const deleteProduct = async (id, dispatch) => {
    dispatch(deleteProductStart());
    try {
      // const res = await userRequest.delete(`/products/${id}`);
      dispatch(deleteProductSuccess(id));
    } catch (err) {
      dispatch(deleteProductFailure());
    }
  };
  
  export const updateProduct = async (id, product, dispatch) => {
    dispatch(updateProductStart());
    try {
      // update
      dispatch(updateProductSuccess({ id, product }));
    } catch (err) {
      dispatch(updateProductFailure());
    }
  };
  export const addProduct = async (product, dispatch) => {
    dispatch(addProductStart());
    try {
      const res = await axios.post(`http://localhost:5000/api/product/`, product);
      console.log(res.data)
      dispatch(addProductSuccess(res.data));
    } catch (err) {
      dispatch(addProductFailure());
    }
  };