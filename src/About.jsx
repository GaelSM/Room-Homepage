import aboutDark from "./assets/image-about-dark.jpg"
import aboutLight from "./assets/image-about-light.jpg"

export default function About(){
    return (
        <section className="about">
            <img src={aboutDark} alt="" />
            <div>
                <h3> About our furniture </h3>
                <p>
                Our multifunctional collection blends design and function to suit your individual taste.
                Make each room unique, or pick a cohesive theme that best express your interests and what
                inspires you. Find the furniture pieces you need, from traditional to contemporary styles
                or anything in between. Product specialists are available to help you create your dream space.
                </p>
            </div>
            <img src={aboutLight} alt="" />
        </section>
    )
}