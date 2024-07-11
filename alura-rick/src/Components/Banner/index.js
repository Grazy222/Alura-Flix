import "./banner.css";
import Image from "../../assets/side.jpg";

function Banner () {
    // JSX
    return (
        <section className="banner">
            <div className='imagem'>
                <img src={Image} alt='banner'/>
                    <h1>Front End</h1>
            </div>
            <p>
                Eu to aqui pra nesse video dizer que a gente vai aprender a começar um
                app inspirada a minha personalidade
            </p>
        </section>
       
    )
}
export default Banner