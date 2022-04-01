import { Route, Routes } from 'react-router-dom'

import HomePage from './routes/home-page'
import Expenses from './routes/expenses'
import Invoices from './routes/invoices'

import './App.css'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />} />
      </Routes>
    </div>
  )
}

export default App
