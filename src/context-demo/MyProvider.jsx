import React, { useContext, useState } from 'react'

import { MyContext, ContextWithState, UserContext } from './MyContext'
import Child1 from './Child1'
import Child2 from './Child2'


const MyProvider = ({children}) => {

    const [msg, setMsg] = useState('Welcome')
    const [userLogin, setUserLogin] = useState('Guest User')

  return (
    <div>
        <MyContext.Provider value={{color:"green"}}>
            
            <ContextWithState.Provider value={{msg, setMsg}}>
                <UserContext.Provider value={{ userLogin, setUserLogin }}>
                    {children} 
                </UserContext.Provider>
                <Child1></Child1>
                <Child2></Child2>
                
            </ContextWithState.Provider>

            {/* <Child1></Child1>
            <Child2></Child2> */}
        </MyContext.Provider>


    </div>

  )
}

export default MyProvider