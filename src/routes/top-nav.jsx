import React from 'react'
import { Link } from 'react-router-dom'

const TopNav = () => {
  return (
    <nav className="">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/invoices">Invoices</Link>
        </li>
        <li>
          <Link to="/expenses">Expenses</Link>
        </li>
      </ul>
    </nav>
  )
}
export default TopNav
