


import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Cards from './Cards'
import { fetchAccounts } from '../../api/utilisateurs'
import { setAccounts } from '../../store/userSlice'

const Admin = ({ auth }) => {
  const distpach = useDispatch()
  const users = useSelector(state => state.account)
  console.log('auth testt ', auth)
  console.log('acounts', users)

  const getAllusers = async () => {
    const data = await fetchAccounts()
    console.log('ghalti a tracker', data)
    distpach(setAccounts(data))
  }
  useEffect(() => {
    getAllusers()
  }, [])

  console.log('listet el db users111111111111111111111111', users)
  return (
    <div>
      {
        users.map((e) => (<Cards user={e} />))
      }
    </div>
  )

}

export default Admin