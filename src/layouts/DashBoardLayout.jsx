import React from 'react'
import { useNavigate, Outlet } from 'react-router-dom'

const DashBoardLayout = () => {


    const navigate = useNavigate()
    console.log('DashBoard Layout')
  return (
    <aside>
        <button onClick={() => {navigate('sales')}}>Sales</button>
        <button onClick={() => {navigate('staff')}}>Staff</button>

        <Outlet></Outlet>
    </aside>
  )
}

export default DashBoardLayout