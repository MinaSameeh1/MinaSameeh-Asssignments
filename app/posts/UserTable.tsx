import React from 'react';
import Link from 'next/link';
import { sort } from 'fast-sort';

interface Post {
  id: number;
  title: string;
  body: string;
}

interface Props {
  orderBy: string;
}

const UserTable = async ({ orderBy }: Props) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: Post[] = await res.json();
  const sortedPosts = sort(posts).asc(orderBy === "title" ? post => post.title : post => post.body);

  return (
    <div>
      <table>
        <thead>
          <tr>
          <th> ID </th>
          <th><Link href="/posts?orderBy=title">Title</Link></th>
          <th><Link href="/posts?orderBy=body">Body</Link></th>
          </tr>
        </thead>
        <tbody>
          {sortedPosts.map((post) => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;