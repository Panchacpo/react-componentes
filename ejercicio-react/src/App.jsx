import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './componentes/Header'
import Article from './componentes/Article'
import Layout from './componentes/Layout'
//import Header2 from './componentes/Header2'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>  
      <Layout />
    </>
      
    
  )
}

export default App
