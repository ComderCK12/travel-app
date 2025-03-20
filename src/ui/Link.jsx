import React from 'react'


const Link = ({linkRef, linkText}) => {
  
    return (
        <a href={linkRef}>{linkText}</a>
    )
}

export default Link