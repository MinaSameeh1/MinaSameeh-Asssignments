import React from 'react'
import UserTable from './UserTable'

interface Props{
    searchParams:{orderBy:string}
}
const UsersPage = async({searchParams:{orderBy}}:Props) => {
   
    return (
        <div>UsersPage {orderBy}
            <UserTable orderBy={orderBy} ></UserTable>
        </div>
  )
}

export default UsersPage