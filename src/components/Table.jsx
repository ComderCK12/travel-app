import React from 'react'
import TableHead from '../ui/TableHead'
import TableBody from '../ui/TableBody'

const Table = ({ column, data }) => {
  return (
    <table>
      <TableHead column={column} />
      <TableBody data={data} />
    </table>
  )
}

export default Table
