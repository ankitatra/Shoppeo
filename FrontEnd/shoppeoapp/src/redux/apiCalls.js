import { loginFailure,loginStart,loginSuccess } from "./userRedux"
import{pulblicRequest} from "../requestMethod"

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