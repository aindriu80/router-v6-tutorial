import React from 'react'
import { Outlet, NavLink, useSearchParams, useLocation } from 'react-router-dom'
import { getInvoices } from '../data'

function QueryNavLink({ to, ...props }) {
  let location = useLocation()
  return <NavLink to={to + location.search} {...props} />
}

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
        {invoices
          .filter((invoice) => {
            let filter = searchParams.get('filter')
            if (!filter) return true
            let name = invoice.name.toLowerCase()
            return name.startsWith(filter.toLowerCase())
          })
          .map((invoice) => (
            <QueryNavLink
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
            </QueryNavLink>
          ))}
      </nav>
      <Outlet />
    </>
  )
}

export default Invoices
