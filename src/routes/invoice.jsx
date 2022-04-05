import { useParams, useNavigate, useLocation } from 'react-router-dom'
import { getInvoice, deleteInvoice } from '../data'

function Invoice() {
  let params = useParams()
  let location = useLocation()
  let navigate = useNavigate()
  let invoice = getInvoice(parseInt(params.invoiceId, 10))
  return (
    <>
      <h2>The invoice page</h2>
      <h3>Invoice: {params.invoiceId}</h3>
      <h4>
        {invoice.name}: {invoice.number}
      </h4>
      <p>Date Due: {invoice.due}</p>
      <button
        onClick={() => {
          deleteInvoice(invoice.number)
          navigate('/invoice' + location.search)
        }}>
        Delete Invoice
      </button>
    </>
  )
}
export default Invoice
