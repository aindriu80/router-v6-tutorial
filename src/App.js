import { Link, Outlet } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div className="App">
      <h2>React Router v6</h2>
      <Link to="/invoices">Invoices</Link> |{' '}
      <Link to="/expenses">Expenses</Link>
      <Outlet />
    </div>
  )
}

export default App
