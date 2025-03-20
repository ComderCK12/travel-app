import React from 'react'
import Image from '../ui/Image'
import TopHeading from '../ui/TopHeading'
import logo from '../assets/images/imgd1.jpg'
import avatar from '../assets/images/imgd2.jpg'

const Header = ({user}) => {
  return (
    <div>
        <Image imageRef={logo} altText={'Logo'}></Image>
        <Image imageRef={avatar} altText={'Avatar'}></Image>
        <TopHeading title={'Padur Travels'} user={user}></TopHeading>
    </div>
  )
}

export default Header