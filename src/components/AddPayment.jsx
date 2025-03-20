import React, { useState } from 'react';
import useForm from '../customhooks/useForm';
import PaymentDetails from './PaymentDetails';
import axios from 'axios';

const AddPayment = () => {

    const [updatedList, setUpdateList] = useState([])

    const initialState = {
        id: "",
        customerName: "",
        amount: "",
        currency: ""
    };

    // Handle form submission and log the values
    const handleSubmit = async (formValues) => {
        console.log('Form submitted!');
        console.log("Form values:", formValues);
        // Here you can make an API call or any other logic with the form data

        await axios.post('http://localhost:3000/payments', formValues).then(console.log('HIIIIIIIIIIIIIIIIIIIIIIIIIIIi'))
        
        fetchData()

    };

    

    const fetchData =  function() {
        let response = axios.get("http://localhost:3000/payments")

        // .then((response) => {
        //     if(response.status = 201) {
        //         setPaymentDetails((prev) => [...prev, value])
        //     }
        // })

        // setting prev response data with 
        setUpdateList(response.data)

        // console.log(response.data)
    }

    // Get the necessary form handlers from the custom useForm hook
    const { onChange, onSubmit, value } = useForm(handleSubmit, initialState);

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="id">ID</label>
                    <input
                        type="text"
                        name="id"
                        id="id"
                        value={value.id} // Bind input value to state
                        onChange={onChange}
                    />
                </div>
                
                <div>
                    <label htmlFor="customerName">Customer Name</label>
                    <input
                        type="text"
                        name="customerName"
                        id="customerName"
                        value={value.customerName} // Bind input value to state
                        onChange={onChange}
                    />
                </div>

                <div>
                    <label htmlFor="amount">Amount</label>
                    <input
                        type="text"
                        name="amount"
                        id="amount"
                        value={value.amount} // Bind input value to state
                        onChange={onChange}
                    />
                </div>

                <div>
                    <label htmlFor="currency">Currency</label>
                    <input
                        type="text"
                        name="currency"
                        id="currency"
                        value={value.currency} // Bind input value to state
                        onChange={onChange}
                    />
                </div>

                <div>
                    <input type="submit" value="Submit" />
                </div>
            </form>

            <PaymentDetails />
        </div>
    );
};

export default AddPayment;
