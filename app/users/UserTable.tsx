import React from 'react'
import Link from 'next/link'
import { sort } from 'fast-sort';
interface User{
    id:number,
    name:string,
    email:string
}
interface Props{
    orderBy:string;
}
const UserTable = async({orderBy}:Props) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    // ,{cache:'no-store'})
    // ,{next:{revalidate:10}});
    const users:User[] = await res.json();
    const sortedUsers = sort(users).
    asc(orderBy==="email"?user=>user.email:user=>user.name);
    [{},{},]
    // {
    //     products:[],
    //     limit:,
    //     skip:
    // }
    return (
    <div>   
        <table>
            <thead>
                <th><Link href="/users?orderBy=name">Name</Link></th>
                <th><Link href="/users?orderBy=email">Email</Link></th>
            </thead>
            <tbody>
                {sortedUsers.map(user=>
                <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                </tr>)}
            </tbody>
        </table>
    </div>
  )
}

export default UserTable