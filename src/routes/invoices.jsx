import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { getInvoices } from '../data'

function Invoices() {
  let invoices = getInvoices()
  // console.log(invoices)
  return (
    <>
      <h3>Invoices</h3>
      {invoices.map((invoice) => (
        <Link to={`/invoices/${invoice.number}`} key={invoice.number}>
          {invoice.name}|{' '}
        </Link>
      ))}
      <Outlet />
    </>
  )
}

export default Invoices
