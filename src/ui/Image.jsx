import React from 'react'
import logo from '../assets/images/imgd1.jpg'

const Image = ({imageRef, altText}) => {
  return (
    <img src={imageRef} alt="altText" />
  )
}

export default Image