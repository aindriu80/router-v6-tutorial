import { getInvoice } from '../data'
import { useParams } from 'react-router-dom'
function Invoice() {
  let params = useParams()
  let invoice = getInvoice(parseInt(params.invoiceId, 10))
  return (
    <>
      <h2>The invoice page</h2>
      <h3>Invoice: {params.invoiceId}</h3>
      <h4>
        {invoice.name}: {invoice.number}
      </h4>
      <p>Date Due: {invoice.due}</p>
    </>
  )
}
export default Invoice
