import roomLogo from "./assets/logo.svg"
import hamburger from "./assets/icon-hamburger.svg"
import close from "./assets/icon-close.svg"
import { useState } from "react"

export default function Navbar(){

  const [isActive, setIsActive] = useState(false)
  return (
    <nav>
      <div className="hamburger" onClick={() => setIsActive(true)}>
        <img src={hamburger} alt="Hamburger Icon" />
      </div>
      <div className="logo">
        <img src={roomLogo} alt="Room Logo" />
      </div>
      <div className={isActive ? "background active" : "background"}>
        <ul>
          <img src={close} alt="Close Icon" className="close" onClick={() => setIsActive(false)}/>
          <li> Home </li>
          <li> Shop </li>
          <li> About </li>
          <li> Contact </li>
        </ul>
      </div>
    </nav>
  )
}