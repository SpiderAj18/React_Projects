import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/config2'
import {logout} from "../../store/authSlice"

function logoutBtn() {
  const dispatch = useDispatch()
  const logoutHandler = () => {
    authService.logout()
  }
  return (
    <div>logoutBtn</div>
  )
}

export default logoutBtn