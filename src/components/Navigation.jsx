import React, { createElement } from 'react'
import Link from '../ui/Link'

const Navigation = ({linkList}) => {

  console.log("HELLO FROM NAVIGATION")
    const createLink = (value, idx) => {

        return (
        <div>
          <Link key={idx} linkRef={value.linkRef} linkText={value.linkText}></Link>
        </div> 
        )
    }
    
  return (
    <div>
        {
            // linkList.map((value, idx) => {
            //     <Link linkRef={value.linkRef} linkText={value.linkText}></Link>
            // })

            linkList && linkList.map(createLink)
        }
    </div>
  )

  
}

export default Navigation