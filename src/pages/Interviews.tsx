import NavBar from "@/components/navigation/NavBar"
import Footer from "@/components/navigation/Footer"
import InterviewsPreview from "@/components/Home/InterviewsPreview"
import { useEffect } from "react"

function Interviews() {
  useEffect(() => {
    scrollTo(0, 0)
  } , [])
    return (
        <div className="min-h-screen bg-black">
        <NavBar />
        <main className="container mx-auto p-4">
        <InterviewsPreview/>
        </main>
        <Footer />
      </div>
    )
}

export default Interviews