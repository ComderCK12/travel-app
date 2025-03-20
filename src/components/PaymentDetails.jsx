import React, {useEffect, useState} from 'react'
import TableHead from '../ui/TableHead'
import TableBody from '../ui/TableBody'
import axios from 'axios'



const PaymentDetails = () => {




    const [paymentDetails, setPaymentDetails] = useState([]) 




    useEffect(() => {
        

        fetchData();
    },[])
    
    
    const fetchData = async function() {
        let response = await axios.get("http://localhost:3000/payments")

        // .then((response) => {
        //     if(response.status = 201) {
        //         setPaymentDetails((prev) => [...prev, value])
        //     }
        // })

        // setting prev response data with 
        setPaymentDetails(response.data)

        // console.log(response.data)
    }

    const colData = ['id','customerName','Amount','Currency']


    const deleteData = async (id) => {
        console.log('Delete called for: ', id)

        await axios.delete(`http://localhost:3000/payments/${id}`).then(console.log('Data Deleted !!!!!!!!!!!!!!!!!!!!!'))

        fetchData()
    }
  return (
    <div>
        <table>
        <TableHead column={colData}></TableHead>
        <TableBody data={paymentDetails} handleClick={deleteData}></TableBody>
            
        </table>
    </div>
  )
}

export default PaymentDetails