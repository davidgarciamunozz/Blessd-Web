import { useState } from 'react';
import { Film } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ReactPlayer from 'react-player/lazy';

const musicVideos = [
  {
    id: 1,
    title: "Piponas Remix - Blessd Version",
    url: "https://www.youtube.com/watch?v=Dftj21lTUIA",
    thumbnailUrl: "https://img.youtube.com/vi/Dftj21lTUIA/maxresdefault.jpg",
  },
  {
    id: 2,
    title: "Casi Algo - Blessd",
    url: "https://www.youtube.com/watch?v=76TtU2cUMB4",
    thumbnailUrl: "https://img.youtube.com/vi/76TtU2cUMB4/maxresdefault.jpg",
  },
  {
    id: 3,
    title: "Magia - Blessd",
    url: "https://www.youtube.com/watch?v=mKq5CFLsIks",
    thumbnailUrl: "https://img.youtube.com/vi/mKq5CFLsIks/maxresdefault.jpg",
  },
];

function MusicVideosPreview() {
  const [activeVideo, setActiveVideo] = useState(musicVideos[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="videos" className="mb-12">
      <h3 className="text-2xl font-bold mb-4 flex items-center text-white">
        <Film className="mr-2" /> Ultimos videos musicales
      </h3>
      <div className="bg-white rounded-lg shadow-md p-4 text-black">
        <h4 className="font-bold mb-2">{activeVideo.title}</h4>
        <div className="max-w-4xl mx-auto">
          <div className="relative w-full pb-[56.25%] mb-4">
            {!isPlaying ? (
              <img
                src={activeVideo.thumbnailUrl}
                alt={`Vista previa de ${activeVideo.title}`}
                className="absolute top-0 left-0 w-full h-full object-cover rounded-lg cursor-pointer"
                onClick={() => setIsPlaying(true)}
              />
            ) : (
              <ReactPlayer
                url={activeVideo.url}
                width="100%"
                height="100%"
                controls={true}
                playing={true}
                onPause={() => setIsPlaying(false)}
                className="absolute top-0 left-0 rounded-lg"
              />
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 max-w-4xl mx-auto">
          {musicVideos.map((video) => (
            <Button
              key={video.id}
              className={`mt-2 ${
                activeVideo.id === video.id
                  ? 'bg-black text-white'
                  : 'bg-white text-black hover:bg-violet-200'
              }`}
              onClick={() => {
                setActiveVideo(video);
                setIsPlaying(false);
              }}
            >
              {video.title}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MusicVideosPreview;