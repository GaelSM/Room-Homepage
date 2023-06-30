// HOOKS
import { useState, useRef, useEffect  } from 'react'
//COMPONENTS
import Buttons from './Buttons'
import Navbar from './Navbar'
import Slide from './Slide'
//DATA
import data from "./data.json"
//CSS
import './App.css'
import About from './About'

export default function App() {

  const [currentSlide, setCurrentSlide] = useState(0)

  const sliderRef = useRef()
  
  useEffect(() => {
    sliderRef.current.querySelectorAll("article")[currentSlide].scrollIntoView({behavior: "smooth"})
  }, [currentSlide])

  return (
    <main>
      <Navbar />
      <section className="slider-container" ref={sliderRef}>
        {
          data.map(slide => <Slide key={slide.id} {...slide}/>)
        }
      </section>
      <Buttons setCurrentSlide={setCurrentSlide} data={data}/>
      <About />
    </main>
  )
}