import * as CONSTANTS from "./constant"


export const getCars=()=>async(dispatch)=>{
    dispatch({type:CONSTANTS.LOADINGT})
    const res =await fetch("https://dummyjson.com/products")
    const data=await res.json()
    try {
        if(data){
        dispatch({type:CONSTANTS.FETCH_SUCCESST,payload: data.products})
        }
    } catch (error) {
        dispatch({type:CONSTANTS.FETCH_FAILEDT,payload:error})
    }

}

export const deleteCars=(id)=>(dispatch)=>{
dispatch({type:CONSTANTS.DELETET,payload:id})
}