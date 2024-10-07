import {Route , Routes} from 'react-router-dom';
import ArtistFanPage from './pages/Home';
import Music from './pages/Music';
import Videos from './pages/Videos';
import PhotoGallery from './pages/PhotoGallery';
import Interviews from './pages/Interviews';

function AppRoutes () {
  return (
    <Routes>
      <Route path="/Blessd-Web/" element={<ArtistFanPage />} />
      <Route path="/Blessd-Web/Historia" element={<Music />} />
      <Route path="/Blessd-Web/Videos" element={<Videos />} />
      <Route path="/Blessd-Web/Gallery" element={<PhotoGallery />} />
      <Route path="/Blessd-Web/Interviews" element={<Interviews />} />
    </Routes>
  )
}

export default AppRoutes