import { useParams } from 'react-router-dom'
function Invoice() {
  let params = useParams()
  return (
    <>
      <h2>The invoice page</h2>
      <h3>Invoice: {params.invoiceId}</h3>
    </>
  )
}
export default Invoice
