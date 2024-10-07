import Footer from "@/components/navigation/Footer"
import NavBar from "@/components/navigation/NavBar"
import MusicBanner from "@/components/History/MusicBanner"
import urlGif from '../assets/Videos/giphyHosted.gif'

function Music() {
  return (
    <div className="min-h-screen bg-black">
      <NavBar />
      <MusicBanner gifUrl={urlGif} />
      <main className="container mx-auto p-4 text-white">
        {/* Aqui va el contenido de la historia de blessd  */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white text-center">Condenado al Éxito</h1>
        <p className="text-center mt-4">
            Blessd, cuyo nombre real es Stiven Mesa Londoño, es un cantante colombiano nacido en
            Medellín el 27 de enero de 2000. Su historia es un relato inspirador de superación y éxito en el
            mundo de la música urbana, específicamente el reguetón y el trap. A una edad temprana,
            Blessd comenzó a interesarse por la música y a componer canciones, influenciado por
            artistas de reguetón como Daddy Yankee, Arcángel y J Balvin.
            Blessd vivió una infancia difícil, marcada por condiciones económicas precarias. Creció en
            un entorno vulnerable, pero su pasión por la música lo mantuvo enfocado en perseguir sus
            sueños. Empezó cantando en fiestas y eventos locales, donde fue ganando reconocimiento
            en su barrio y en la ciudad.
      </p>
      <br />
      <br />
      <p>
            En 2019, lanzó su primer sencillo, “Una”, que comenzó a darle visibilidad en la escena
            musical local. Su verdadero salto a la fama llegó en 2020 con el tema “Imposible Remix”, en
            colaboración con Maluma, que fue un éxito a nivel internacional. Esto le abrió puertas en la
            industria y le permitió trabajar con otros grandes artistas del reguetón como Feid, Myke
            Towers y Nicky Jam.
            Desde entonces, Blessd ha lanzado varios éxitos, incluyendo “Quien TV”, “Medallo”, y
            “Tendencia Global”, y ha continuado creciendo como una de las jóvenes promesas del
            reguetón colombiano. Su estilo mezcla letras callejeras con mensajes de superación
            personal, y ha sido elogiado por su capacidad para conectar con audiencias tanto en
            Colombia como internacionalmente.
      </p>
      </main>
      <Footer />
    </div>
  )
}

export default Music