import React from 'react'

const TableHead = ({column}) => {
  return (
    <thead>
        <tr>
            {
                column.map((colData, idx) => {
                    return <th key={idx}>{colData}</th>
            })
            }
        </tr>
    </thead>
  )
}

export default TableHead