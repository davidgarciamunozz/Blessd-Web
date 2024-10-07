import Footer from "@/components/navigation/Footer"
import NavBar from "@/components/navigation/NavBar"
import MusicBanner from "@/components/History/MusicBanner"
import urlGif from '../assets/Videos/giphyHosted.gif'

function Music() {
  return (
    <div className="min-h-screen bg-black">
      <NavBar />
      <MusicBanner gifUrl={urlGif} />
      <main className="container mx-auto px-4 py-8 text-white">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white text-center mb-8">Condenado al Éxito</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p>
              Blessd, cuyo nombre real es <strong>Stiven Mesa Londoño</strong>, es un cantante colombiano nacido en
              Medellín el 27 de enero de 2000. Su historia es un relato inspirador de superación y éxito en el
              mundo de la música urbana, específicamente el reguetón y el trap.
            </p>
            <p>
              A una edad temprana, Blessd comenzó a interesarse por la música y a componer canciones, influenciado por
              artistas de reguetón como Daddy Yankee, Arcángel y J Balvin.
            </p>
            <p>
              Blessd vivió una infancia difícil, marcada por condiciones económicas precarias. Creció en
              un entorno vulnerable, pero su pasión por la música lo mantuvo enfocado en perseguir sus
              sueños. Empezó cantando en fiestas y eventos locales, donde fue ganando reconocimiento
              en su barrio y en la ciudad.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <img
              src="https://imagenes.expreso.ec/files/image_1200_675/uploads/2021/06/03/60b95329ae89a.jpeg"
              alt="Blessd de joven"
              className="rounded-lg shadow-lg w-full max-w-md object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="flex justify-center items-center order-2 md:order-1">
            <img
              src="https://scontent.fclo1-4.fna.fbcdn.net/v/t39.30808-6/312348855_630803678602849_8721657993318572154_n.jpg?stp=cp6_dst-jpg_s1080x2048&_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=tHhNpH3N37kQ7kNvgGwEk3D&_nc_ht=scontent.fclo1-4.fna&_nc_gid=AIrvF7zd2FkjMAPnvdjRLcU&oh=00_AYCFqJaUV_to4dpDx_BFwzvWz09YtIBCrod6pPtgAKODvg&oe=67092125"
              alt="Blessd en sus inicios"
              className="rounded-lg shadow-lg w-full max-w-md object-cover"
            />
          </div>
          <div className="space-y-4 order-1 md:order-2">
            <p>
              En 2019, lanzó su primer sencillo, "Una", que comenzó a darle visibilidad en la escena
              musical local. Su verdadero salto a la fama llegó en 2020 con el tema "Imposible Remix", en
              colaboración con Maluma, que fue un éxito a nivel internacional.
            </p>
            <p>
              Esto le abrió puertas en la industria y le permitió trabajar con otros grandes artistas del reguetón como Feid, Myke
              Towers y Nicky Jam.
            </p>
            <p>
              Desde entonces, Blessd ha lanzado varios éxitos, incluyendo "Quien TV", "Medallo", y
              "Tendencia Global", y ha continuado creciendo como una de las jóvenes promesas del
              reguetón colombiano. Su estilo mezcla letras callejeras con mensajes de superación
              personal, y ha sido elogiado por su capacidad para conectar con audiencias tanto en
              Colombia como internacionalmente.
            </p>
            <p>Además de su éxito musical, Blessd también ha sido un ejemplo de resiliencia, demostrando
              que, a pesar de las dificultades económicas y sociales, es posible alcanzar los sueños con
              esfuerzo, talento y perseverancia.
            </p>
          <p>
              Una de las canciones que demuestran el proceso de su historia es ,<strong>“CONDENADO AL ÉXITO
              II”</strong> La canción de Blessd refleja una profunda introspección personal, espiritualidad y temas
              de superación. En ella, el artista aborda varios aspectos de su vida, desde sus luchas
              internas hasta su fe en Dios, así como su deseo de alcanzar el éxito mientras mantiene los
              pies en la tierra.
              Algunos de los temas que trata de acuerdo a la letra son:
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="space-y-4">
            
            <p>
             <strong>Fe y espiritualidad:</strong> <br /> <br />
            Desde el principio, Blessd menciona su conexión con Dios, describiendo cómo la fe lo guía en
            sus momentos de mayor duda y dificultad. Habla del “León de Judá” y de cómo Jesús es su
            “bastón” en esta “dura lucha”. A través de este lenguaje bíblico, manifiesta que su éxito y
            bienestar dependen de su confianza en un poder superior. La fe es para él una fuente de luz
            en medio de la oscuridad y un refugio cuando se siente perdido, lo que lo lleva a arrodillarse y
            hablar directamente con Dios en busca de consuelo y guía.
            </p>
          <p>
           <strong>Perseverancia y trabajo duro:</strong> <br /><br />
            La letra también resalta la importancia del esfuerzo y la paciencia. Dios le dice “Trabaja,
            cosecha y espera / No puedes debutar sin pasar primero por la cantera”, lo que ilustra la
            creencia de Blessd en que todo éxito requiere sacrificio y tiempo. Esta filosofía de vida lo
            mantiene centrado en trabajar y no rendirse, a pesar de los obstáculos.
          </p>
          <p>
           <strong>Superación y motivación:</strong> <br /><br />
          La parte final de la canción gira en torno a su triunfo personal. Menciona que “todo se nos
          dio”, sugiriendo que su esfuerzo finalmente rindió frutos. Habla del éxito material (“Mucho’
          carro’, mucha’ joya, muchas chimbas”) pero aclara que “la energía de Stiven, la misma”, lo
          que implica que, a pesar de haber alcanzado el éxito, su esencia no ha cambiado. Esta parte
          de la canción también busca motivar a otros, recordándoles que ellos también pueden lograr
          sus metas si trabajan duro y mantienen la fe.
          </p>
          </div>
          <div className="flex justify-center items-center">
            <img
              src="https://sitiomusical.com/wp-content/uploads/2021/12/blessd_20211207_3-823x1024.jpg"
              alt="Blessd en concierto"
              className="rounded-lg shadow-lg w-full max-w-md object-cover"
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Music