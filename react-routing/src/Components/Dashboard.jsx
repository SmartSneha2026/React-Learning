import React from 'react'
import {Outlet} from 'react-router-dom'
const Dashboard = () => {
  return (
    <div>Dashboard PAGE
        <Outlet/>
    </div>
  )
}

export default Dashboard