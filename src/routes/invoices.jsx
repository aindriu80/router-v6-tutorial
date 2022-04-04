import React from 'react'
import { Link, Outlet, NavLink } from 'react-router-dom'
import { getInvoices } from '../data'

function Invoices() {
  let invoices = getInvoices()
  return (
    <>
      <h3>Invoices</h3>
      <nav>
        {invoices.map((invoice) => (
          <NavLink
            style={({ isActive }) => {
              return {
                display: 'block',
                margin: '1rem 0',
                color: isActive ? 'red' : '',
              }
            }}
            to={`/invoices/${invoice.number}`}
            key={invoice.number}>
            {invoice.name}
          </NavLink>
        ))}
      </nav>
      <Outlet />
    </>
  )
}

export default Invoices
