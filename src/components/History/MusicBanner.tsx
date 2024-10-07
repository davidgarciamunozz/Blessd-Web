interface MusicBannerProps {
  gifUrl: string;
}

export default function MusicBanner({ gifUrl }: MusicBannerProps) {
  return (
    <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${gifUrl})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30" />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white text-center">
          
        </h1>
      </div>
    </div>
  )
}