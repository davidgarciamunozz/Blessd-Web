import {Route , Routes} from 'react-router-dom';
import ArtistFanPage from './pages/Home';
import Music from './pages/Music';
import Videos from './pages/Videos';
import PhotoGallery from './pages/PhotoGallery';
import Interviews from './pages/Interviews';

function AppRoutes () {
  return (
    <Routes>
      <Route path="/Blessd-web/" element={<ArtistFanPage />} />
      <Route path="/Blessd-web/Music" element={<Music />} />
      <Route path="/Blessd-web/Videos" element={<Videos />} />
      <Route path="/Blessd-web/Gallery" element={<PhotoGallery />} />
      <Route path="/Blessd-web/Interviews" element={<Interviews />} />
    </Routes>
  )
}

export default AppRoutes