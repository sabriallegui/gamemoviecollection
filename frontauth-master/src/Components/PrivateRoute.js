import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux'
import { setContacts } from '../store/authSlice'
import { fetchAccount } from '../api/authuser'
import './navbar.css'

import NavBarContainer from "./NavBarContainer";
import User from '../Components/User/User'
import Admin from '../Components/Admin/Admin'
import Login from '../Components/Login'
import Homeuser from "./User/Homeuser";
const PrivateRoute = () => {


  const dispatch = useDispatch()
  const auth = useSelector(state => state.authuser)
  console.log('lina redux auth', auth)


  const getAccout = async () => {
    const data = await fetchAccount()
    console.log("data", data)
    dispatch(setContacts(data))
  }
  useEffect(() => {
    getAccout()
  }, [])


  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem('token')
    navigate('/login')
  }




  const token = localStorage.getItem('token')
  console.log('token el user specifique ', token)
  console.log("auth", auth)

  return (

    <div>
      <div>
        {
          token ? (<>   <NavBarContainer auth={auth} logout={logout} />


            {auth.role === "admin" ? (<Admin auth={auth} />) : (<Homeuser auth={auth} />)}

          </>) : (<Login />)
        }
      </div>


    </div>


  )



}

export default PrivateRoute