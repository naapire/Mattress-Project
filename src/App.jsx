import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Homepage from './components/MatressPage/homePage'
import Footer from './components/MatressPage/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Homepage/> 
    <Footer/>
    </>
  )
}

export default App
