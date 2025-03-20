import React, { useState } from 'react'
import Header from '../components/Header'
import Navigation from '../components/Navigation'
import Table from '../components/Table'
import TableHead from '../ui/TableHead'
import StateDemo from '../components/StateDemo'
import PaymentDetails from '../components/PaymentDetails'
import ProfilePage from '../components/ProfilePage'
import AddPayment from '../components/AddPayment'
import { Outlet } from 'react-router-dom'
import MyProvider from '../context-demo/MyProvider'
import { UserContext } from '../context-demo/MyContext'

const RootLayout = () => {

    let links = [
        {linkRef: "/", linkText: "Home"},
        {linkRef: "/about", linkText: "About"},
        {linkRef: "/products", linkText: "Product"},
        {linkRef: "/salesDetails", linkText: "Sales Details"},
        {linkRef: "/staffDetails", linkText: "Staff Details"},
        {linkRef: "/dashboard", linkText: "DashBoard"},
        {linkRef: "/finance", linkText: "Finance"},
        {linkRef: "/addPayments", linkText: "Add Payments"}
    ]

    // const [userLogin, setUserLogin] = useState('Guest user')

    
    return (
            <>
            <div>
                {/* <UserContext.Provider value={{userLogin, setUserLogin}}>
                    <Navigation linkList={links}></Navigation>
                </UserContext.Provider>
                <Outlet></Outlet> */}
                
                <MyProvider>

                    <Navigation linkList={links}></Navigation>
                    <Outlet></Outlet>
                </MyProvider>
            </div>
            </>
        )
    
    // let user = {username: 'Chirag', role: 'Admin'}

    // let links = [
    //     {linkRef: '/home', linkText: 'Home'}, 
    //     {linkRef: '/about', linkText: 'About'}, 
    //     {linkRef: '/products', linkText: 'Products'}
    // ]
    
    // let columns = ['Name', 'Age', 'City']
    // let data = [['Chirag', '20', 'Mumbai'], ['Rohit', '21', 'Mumbai']]

    // let dataL = [
    //     {
    //         "id": 1,
    //         "customerName": "John Doe",
    //         "location": "New York, USA",
    //         "email": "johndoe@example.com"
    //     },
    //     {
    //         "id": 2,
    //         "customerName": "Jane Smith",
    //         "location": "Los Angeles, USA",
    //         "email": "janesmith@example.com"
    //     }
    // ]

    // const [search, setSearch] = useState('')
    // const [filteredData, setFilteredData] = useState(dataL)

    // const handleSearch = (event) => {
    //     const query = event.target.value.toLowerCase()
    //     setSearch(query)
        
    //     // Filter the data based on the customerName
    //     const filtered = dataL.filter((row) =>
    //         row.customerName.toLowerCase().includes(query)
    //     )
    //     setFilteredData(filtered)
    // }

    // return (
    //     <div>
    //         <header>
    //             <Header user={user}></Header>
    //             <Navigation linkList={links}></Navigation>
    //         </header>

    //         <main>
    //             <div>
    //                 Search by name: 
    //                 <input 
    //                     type="search" 
    //                     name="searchBtn" 
    //                     value={search} 
    //                     onChange={handleSearch}
    //                 />
    //             </div>

    //             {/* Pass filteredData to the Table component */}
    //             <Table column={columns} data={data}></Table>
    //             <Table column={['Customer Name', 'Location', 'Email']} data={filteredData}></Table>
    //         </main>

    //         <PaymentDetails></PaymentDetails>
    //         <ProfilePage></ProfilePage>

    //         {/* payments */}

    //         <AddPayment></AddPayment>


    //         {/* <Table column={[]}></Table> */}

    //         <footer>
    //             <StateDemo></StateDemo>
    //         </footer>
    //     </div>
    // )
}

export default RootLayout
