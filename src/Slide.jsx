import arrowIcon from "./assets/icon-arrow.svg"

export default function Slide({imageDesktop, imageMobile, title, text}){
    return (
      <article>
        <picture>
          <source media="(min-width: 700px)" srcSet={imageDesktop} />
          <img src={imageMobile} alt="" />
        </picture>
        <div className="text">
          <h2> {title} </h2>
          <p> {text} </p>
          <a onClick={(e) => e.preventDefault()}>
            <span> Shop </span>
            <span> Now </span>
            <img src={arrowIcon} alt="Arrow Icon"/>
          </a>
        </div>
      </article>
    )
  }