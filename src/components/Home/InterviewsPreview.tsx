import { useState } from 'react';
import { Film } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ReactPlayer from 'react-player/lazy';

const interviewVideos = [
  {
    id: 1,
    title: "Blessd y Ryan Castro",
    url: "https://www.youtube.com/watch?v=nqmgjKI0Hpw",
    thumbnailUrl: "https://img.youtube.com/vi/nqmgjKI0Hpw/maxresdefault.jpg",
  },
  {
    id: 2,
    title: "Blessd y su Historia | Westcol",
    url: "https://www.youtube.com/watch?v=nJ24vj7gN1M",
    thumbnailUrl: "https://img.youtube.com/vi/nJ24vj7gN1M/maxresdefault.jpg",
  },
  {
    id: 3,
    title: "Detrás del Éxito de Blessd",
    url: "https://www.youtube.com/watch?v=SAbOD9UYct8",
    thumbnailUrl: "https://img.youtube.com/vi/SAbOD9UYct8/maxresdefault.jpg",
  },
];

function InterviewsPreview() {
  const [activeVideo, setActiveVideo] = useState(interviewVideos[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="videos" className="mb-12">
      <h3 className="text-2xl font-bold mb-4 flex items-center text-white">
        <Film className="mr-2" /> Videos de Entrevistas
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
          {interviewVideos.map((video) => (
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

export default InterviewsPreview;