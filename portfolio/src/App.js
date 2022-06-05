import './App.css'
import Header from './components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div style={{ backgroundColor: 'black' }}>
      <BrowserRouter>
        <Header />
        <Routes>
          
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
