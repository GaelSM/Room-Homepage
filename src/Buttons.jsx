import iconLeft from "./assets/icon-angle-left.svg"
import iconRight from "./assets/icon-angle-right.svg"

export default function Buttons({setCurrentSlide, data}){

    const handleClick = (type) => {
      setCurrentSlide(prev => {
        if(type === "previous"){
          if(prev - 1 < 0) return data.length - 1
          return prev - 1
        }else{
          if(prev + 1 > data.length - 1) return 0
          return prev + 1
        }
      })
    }
    
    return(
      <div className="buttons">
        <button onClick={() => handleClick("previous")}>
          <img src={iconLeft} alt="Angle Left Icon"/>
        </button>
        <button onClick={() => handleClick("next")}>
          <img src={iconRight} alt="Angle Right Icon"/>
        </button>
      </div>
    )
  }