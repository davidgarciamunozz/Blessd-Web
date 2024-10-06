import Footer from "@/components/navigation/Footer"
import NavBar from "@/components/navigation/NavBar"
import MusicBanner from "@/components/History/MusicBanner"
import urlGif from '../assets/Videos/giphyHosted.gif'

function Music() {
  return (
    <div className="min-h-screen bg-black">
      <NavBar />
      <MusicBanner gifUrl={urlGif} />
      <main className="container mx-auto p-4">
        {/* Aquí puedes colocar el contenido de la página de música */}
      </main>
      <Footer />
    </div>
  )
}

export default Music