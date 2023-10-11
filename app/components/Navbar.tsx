import React from 'react'
import Link from 'next/link'
import styles from '../Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
    <div className={styles.logo}>
      <Link href="/">Mina Sameeh Assignments </Link>
    </div>
    <ul className={styles.navLinks}>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/pages/aboutus">About</Link>
      </li>
      <li>
        <Link href="/pages/contactus">Contact</Link>
      </li>
      <li>
        <Link href="/users/products">Products</Link>
      </li>
      <li>
        <Link href="c:\Users\Mina Sameeh\Downloads\lab3\app\users/users">Users</Link>
      </li>
      <li><Link href="/posts">Posts</Link></li>
    
    </ul>
  </nav>
  )
}

export default Navbar
