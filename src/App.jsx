import './App.css'
import Body from './components/Body'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {
  
  useEffect(() => {
    AOS.init()
  }, []);

  return (
    <>
      <Body />
    </>
  )
}

export default App
