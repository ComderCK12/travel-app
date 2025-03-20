import React from 'react'

const TableBody = ({ data, handleClick }) => {
  return (
    <tbody>
      {data.map((row, idx) => (
        <tr key={idx}>
          {/* Dynamically create <td> for each property of the object */}
          {Object.values(row).map((dataItem, dataIdx) => {
            return <td key={dataIdx}>{dataItem}</td>
          })}
          <td><button></button>Edit</td>
          <td><button onClick={() => {
            handleClick(row.id)
          }}>Delete</button></td>
        </tr>
      ))}
    </tbody>
  )
}

export default TableBody
