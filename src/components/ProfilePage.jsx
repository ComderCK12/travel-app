import React from 'react'
import useData from '../customhooks/useData'
import TableBody from '../ui/TableBody'
import TableHead from '../ui/TableHead'
import { useParams } from 'react-router-dom'

const ProfilePage = () => {

    const {data} = useData('http://localhost:3000/profiles')
    let columns = ['id', 'Name', 'Avatar', 'Tag Name']

    const profileId = useParams()
  return (
    // <table>
    //     <TableHead column={columns}></TableHead>
    //     <TableBody data={data}></TableBody>
    // </table>

    <div>
        <p>Name {profileId.id}</p>

        <p>Tag name </p>
    </div>
  )
}

export default ProfilePage