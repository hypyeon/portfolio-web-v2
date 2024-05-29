import './App.css'
import Body from './components/Body'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function App() {
  
  useEffect(() => {
    AOS.init()
  }, []);

  return (
    <div>
      <Body />
    </div>
  )
}