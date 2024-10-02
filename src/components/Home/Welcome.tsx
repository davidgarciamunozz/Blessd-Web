import {Link} from "react-router-dom"

export default function WelcomeSection() {
    return (
        <section className="mb-12 text-center text-white">
        <Link to='/Blessd-Web/History'><h2 className="text-4xl font-bold mb-4 hover:text-violet-500 transition ease-in-out"> Descubre la historia detrás de su exito</h2></Link>
        <p className="text-xl italic">Nacimos en el barrio pero somos de la realeza</p>
      </section>
    )
}