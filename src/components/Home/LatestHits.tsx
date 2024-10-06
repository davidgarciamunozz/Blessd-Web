import React, { useState, useRef } from 'react';
import { Music, Play, Pause } from 'lucide-react';
import piponasRemix from '../../assets/Music/piponasremix.mp3';
import Mirame from '../../assets/Music/mirame.mp3';
import Soltera from '../../assets/Music/soltera.mp3';

interface Song {
    name: string;
    img: string;
    preview: string;
}

const LatestHits: React.FC = () => {
    const [currentSong, setCurrentSong] = useState<string | null>(null);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const songs: Song[] = [
        { name: 'Piponas (Blessd Version)', img: 'https://images.genius.com/a9e42eb4ae56206a88e4c1186bc4ec30.1000x1000x1.png', preview: piponasRemix },
        { name: 'Mírame', img: 'https://www.teleantioquia.co/wp-content/uploads/2024/07/IMG_7539.jpg', preview: Mirame },
        { name: 'Soltera', img: 'https://i.scdn.co/image/ab67616d0000b273fcb728019668a4ed423a9d15', preview: Soltera },
    ];

    const handlePlayPause = (preview: string) => {
        if (currentSong === preview) {
            // Si la canción actual está sonando, la pausamos
            audioRef.current?.pause();
            setCurrentSong(null);
        } else {
            // Si es una nueva canción o está pausada, la reproducimos
            if (audioRef.current) {
                audioRef.current.src = preview;
                audioRef.current.play();
            }
            setCurrentSong(preview);
        }
    };

    return (
        <section id="music" className="mb-12">
            <h3 className="text-2xl font-bold mb-4 flex items-center text-white">
                <Music className="mr-2" /> Últimos lanzamientos
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {songs.map(({ name, img, preview }) => (
                    <div key={name} className="bg-black rounded-lg shadow-md relative">
                        <img 
                            src={img} 
                            alt={name} 
                            className="w-full h-72 object-cover mb-2 rounded-t"
                        />
                        <button 
                            onClick={() => handlePlayPause(preview)}
                            className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md"
                        >
                            {currentSong === preview ? <Pause size={24} /> : <Play size={24} />}
                        </button>
                        <div className='px-4 pb-4 bg-black text-white'>
                            <h4 className="font-bold">{name}</h4>
                            <p>Escucha {name} ahora!</p>
                        </div>
                    </div>
                ))}
            </div>
            <audio ref={audioRef} />
        </section>
    );
}

export default LatestHits;