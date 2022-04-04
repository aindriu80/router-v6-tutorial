import React from 'react'
import { Outlet, NavLink, useSearchParams } from 'react-router-dom'
import { getInvoices } from '../data'

function Invoices() {
  let invoices = getInvoices()
  let [searchParams, setSearchParams] = useSearchParams()
  return (
    <>
      <h3>Invoices</h3>
      <nav>
        <input
          value={searchParams.get('filter') || ''}
          onChange={(event) => {
            let filter = event.target.value
            if (filter) {
              setSearchParams({ filter })
            } else {
              setSearchParams({})
            }
          }}
        />
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
