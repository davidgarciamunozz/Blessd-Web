import Hero from "@/components/Home/Hero"
import Footer from "@/components/navigation/Footer"
import NavBar from "@/components/navigation/NavBar"

function Music () {
    return (
        <div className="min-h-screen bg-black">
      <NavBar />
      <main className="container mx-auto p-4">
      <Hero />
      </main>
      <Footer />
    </div>
    )
}

export default Music