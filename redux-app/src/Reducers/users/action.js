
import * as CONSTANTS from './constants'

export  const  getUserData=()=>async(dispatch)=> {
    dispatch({type:CONSTANTS.ON_LOADING})
    try {
        const response =await fetch("https://randomuser.me/api/")
        const data=await response.json();
        console.log(data);
        if(data){
        dispatch({type:CONSTANTS.ON_SUCCESS,payload:data.results})}
    
    } catch (error) {
        dispatch({type:CONSTANTS.ON_ERROR,payload:error})
  
    }

}
