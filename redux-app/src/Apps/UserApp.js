import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserData } from '../Reducers/users/action'

function UserApp() {
   const {users}=useSelector((state)=>state.users)
   const dispatch=useDispatch()
   useEffect
   (()=>{
      dispatch(getUserData())
   },[])
  return (
    <div>
        {users?.map((user)=><p key={user.id.value}>{user.name.first} {user.name.last }</p>)}
    </div>
  )
}
export  default UserApp;