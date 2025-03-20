import React, { useState, useEffect } from 'react'

const StateDemo = () => {

    const [count, setCount] = useState(1)
    const [list, setList] = useState([])

    // useEffect(() => {
    //     // side effects happens here
        
        
    //     return () => {}                 // cleanup function
    // },[])  // [] is the dependency array


    // First version when useEffect is called just once without specifying when to call
    // useEffect(() => {
    //     console.log("useEffect called !")
    // },[])


    // when value is incremented
    useEffect(() => {
        console.log("useEffect called when count changed! ", count)

        return () => {console.log('cleanup called for ', count)}
    },[count])


    useEffect(() => {
        console.log("useEffect called when list changed! ", list)

        return () => {console.log('cleanup called for list: ', list)}
    },[list])




    const handleClick = () => {
        setCount((prev) => {
            return prev + 1
        })

        // updates are done only once in this case even if we call it twice like this
        // setCount(prev + 1)
        // setCount(prev + 1)
    }



    const handleBlur = (event) => {
        console.log(event.target.value)
        console.log("Event fired")
        
        setList((prev) => [...prev, event.target.value])
    }

  return (
    <div>
        <p>{count}</p>
        <p>show list</p>
        <div>
            {
                list.map((value, idx) => (
                    <p key={idx}>{value}</p>
                ))
            }
        </div>
        <button onClick={handleClick}>Increment</button>
        <input type='text' name='city' onBlur={handleBlur}></input>
    </div>
  )
}

export default StateDemo