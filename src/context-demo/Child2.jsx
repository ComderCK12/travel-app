import React, { useContext } from 'react'
import { MyContext } from './MyContext'

const Child2 = () => {
    const ctx = useContext(MyContext)
  return (
    <div>Child2 {ctx.color}</div>
  )
}

export default Child2