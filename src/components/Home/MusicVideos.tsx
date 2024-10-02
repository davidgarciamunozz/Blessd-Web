import { Film } from 'lucide-react';
import { Button } from '@/components/ui/button';

function MusicVideosPreview () {
  return (
    <section id="videos" className="mb-12">
    <h3 className="text-2xl font-bold mb-4 flex items-center text-white">
      <Film className="mr-2" /> Videos Musicales
    </h3>
    <div className="bg-white rounded-lg shadow-md p-4 text-black">
      <h4 className="font-bold mb-2">Último video musical</h4>
      <p>Mira la ulitma obra de arte de Blessd</p>
      <Button className="mt-2 bg-white text-blue-900 hover:bg-blue-100">Ver ahora</Button>
    </div>
  </section>
  );
}

export default MusicVideosPreview;