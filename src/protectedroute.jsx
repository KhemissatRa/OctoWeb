import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function protectedroute({children}) {
  const token=localStorage.getItem('token')
    const RedirectToLogin=()=>{
    const navigate=useNavigate()
    navigate("/login")
  }
   if(!token){
    RedirectToLogin()
   }
  if(token){
  return chidren
  }
}
