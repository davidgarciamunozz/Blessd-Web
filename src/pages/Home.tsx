import NavBar from '@/components/navigation/NavBar'
import Hero from '@/components/Home/Hero'
import WelcomeSection from '@/components/Home/Welcome'
import LatestHits from '@/components/Home/LatestHits'
import MusicVideosPreview from '@/components/Home/MusicVideos'
import PhotoGalleryPreview from '@/components/Home/PhotoGalleryPreview'
import InterviewsPreview from '@/components/Home/InterviewsPreview'
import Footer from '@/components/navigation/Footer'
 
export default function ArtistFanPage() {

  return (
    <div className="min-h-screen bg-black">
      <NavBar />
      <main className="container mx-auto p-4">
      <a href='https://wmerchshop.com/'><Hero /> </a>
      <WelcomeSection />
      <LatestHits />
      <MusicVideosPreview />
      <PhotoGalleryPreview />
      <InterviewsPreview />
      </main>
      <Footer />
    </div>
  )
}