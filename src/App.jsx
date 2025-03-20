import { useState } from 'react'
import RootLayout from './layouts/RootLayout'
import HomeLayout from './layouts/HomeLayout'
import './App.css'
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom' 
import Login from './components/Login'
import NotFound from './components/NotFound'
import ProfilePage from './components/ProfilePage'
import PaymentDetails from './components/PaymentDetails'
import AddPayment from './components/AddPayment'
import DashBoardLayout from './layouts/DashBoardLayout'
import SalesDetails from './components/SalesDetails'
import StaffDetails from './components/StaffDetails'
import StateDemo from './components/StateDemo'
import Finance from './components/Finance'
import PrivateRoute from './components/PrivateRoute'

function App() {

  const myroute = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Login />} />
        <Route path="*" element={<NotFound />} />
        <Route path='/about' element={<StateDemo />}></Route>
        <Route path='/profile/:id' element={<ProfilePage />}></Route>
        
        <Route path='/dashboard' element={<DashBoardLayout />}>
          <Route path='sales' element={<SalesDetails />}></Route>
          <Route path='staff' element={<StaffDetails />}></Route>
        </Route>

        <Route path="/finance" element={<PrivateRoute element={<Finance />} />} />

        <Route path='/products' element={<PaymentDetails />}></Route>
        <Route path='/addPayments' element={<AddPayment />}></Route>
        <Route path='/salesDetails' element={<SalesDetails />}></Route>
        <Route path='/staffDetails' element={<StaffDetails />}></Route>
      </Route>
    )
  )

  

  console.log("Hello world")
  
  return (
    <>
      <h1>Hello App jsx</h1>
      <RouterProvider router={myroute} />
      {/* <RootLayout></RootLayout> */}
      {/* <DashboardLayout></DashboardLayout> */}
      {/* <HomeLayout></HomeLayout> */}

      {/* router provide for adding routes */}
    </>
  )
  // console.log("Hello world 2")
}

export default App
