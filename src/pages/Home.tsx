import React from 'react'
import { Menu, X, Music, Film, Camera, Mic, Share2 } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function ArtistFanPage() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  return (
    <div className="min-h-screen bg-black">
      <header className="bg-black text-white p-4 sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Blessd </h1>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
          <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block`}>
            <ul className="md:flex space-y-2 md:space-y-0 md:space-x-4">
              <li><a href="#music" className="hover:text-blue-300">Música</a></li>
              <li><a href="#videos" className="hover:text-blue-300">Videos</a></li>
              <li><a href="#gallery" className="hover:text-blue-300">Galería</a></li>
              <li><a href="#interviews" className="hover:text-blue-300">Entrevistas</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto p-4">
        <section className="mb-12 mt-10 relative overflow-hidden rounded-lg">
          <div className="h-96 md:h-[28rem] lg:h-[32rem] relative">
            <img
              src="https://wmerchshop.com/cdn/shop/files/banner_beige_horizontal_2808x.jpg?v=1727210553"
              alt="Featured Artist"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 flex items-end">
              <div className="p-8">
                <Button className="bg-white text-blue-900 hover:bg-blue-100">Explorar ahora</Button>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Descubre lo ultimos hits del bendito!</h2>
          <p className="text-xl">Nacimos en el barrio pero somos de la realeza</p>
        </section>

        <section id="music" className="mb-12">
          <h3 className="text-2xl font-bold mb-4 flex items-center text-white">
            <Music className="mr-2" /> Últimos lanzamientos
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
                { name: 'Mírame', img: 'https://www.teleantioquia.co/wp-content/uploads/2024/07/IMG_7539.jpg' },
                { name: 'Si Sabe', img: 'https://i.scdn.co/image/ab67616d0000b2739634fca36bf59f758ec93aa3' },
                { name: 'Soltera', img: 'https://i.scdn.co/image/ab67616d0000b273fcb728019668a4ed423a9d15' }
            ].map(({ name, img }) => (
                <div key={name} className="bg-white rounded-lg shadow-md p-4">
                <img src={img} alt={name} className="w-full h-52 object-cover mb-2 rounded" />
                <h4 className="font-bold">{name}</h4>
                <p>Escucha {name} ahora!</p>
                </div>
            ))}
          </div>
        </section>

        <section id="videos" className="mb-12">
          <h3 className="text-2xl font-bold mb-4 flex items-center text-white">
            <Film className="mr-2" /> Music Videos
          </h3>
          <div className="bg-white rounded-lg shadow-md p-4 text-black">
            <h4 className="font-bold mb-2">Último video musical</h4>
            <p>Mira la ulitma obra de arte de Blessd</p>
            <Button className="mt-2 bg-white text-blue-900 hover:bg-blue-100">Ver ahora</Button>
          </div>
        </section>

        <section id="gallery" className="mb-12">
          <h3 className="text-2xl font-bold mb-4 flex items-center text-white">
            <Camera className="mr-2" /> Photo Gallery
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
                { id: 1, img: 'https://caracoltv.brightspotcdn.com/dims4/default/dd84ca8/2147483647/strip/true/crop/780x565+0+0/resize/780x565!/format/webp/quality/90/?url=http%3A%2F%2Fcaracol-brightspot.s3.us-west-2.amazonaws.com%2Fa8%2F7f%2F1e4f695f4b7b8280690724a6e4f3%2F358510025-1239261570000604-3990801214919371783-n-43019793-20230810101142.jpg' },
                { id: 2, img: 'https://caracol.com.co/resizer/v2/6FWNB6MWY5AKRDJ6U37DOFSOF4.JPG?auth=f62983dcc1d18e7e0c7225389c47eaffd30d7004fc6d8373981648a00029fe25&width=650&height=488&quality=70&smart=true' },
                { id: 3, img: 'https://i.ytimg.com/vi/gNWDqZ4vi3w/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCH0wyUQCVPLth6HtoCTKtd7lXGYQ' },
                { id: 4, img: 'https://mixradio.co/wp-content/uploads/2023/03/blessd-5.jpg' }
            ].map(({ id, img }) => (
                <img 
                key={id} 
                src={img} 
                alt={`Blessd ${id}`} 
                className="w-full h-40 object-cover rounded" 
                />
            ))}
          </div>
        </section>

        <section id="interviews" className="mb-12">
          <h3 className="text-2xl font-bold mb-4 flex items-center text-white">
            <Mic className="mr-2" /> Recent Interviews
          </h3>
          <div className="bg-blue-800 rounded-lg shadow-md p-4 text-white">
            <h4 className="font-bold mb-2">Exclusive Interview</h4>
            <p>The artist discusses their creative process</p>
            <Button className="mt-2 bg-white text-blue-900 hover:bg-blue-100">Watch Interview</Button>
          </div>
        </section>
      </main>

      <footer className="bg-blue-900 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <p>&copy; 2024 Blessd </p>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Share2 />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Share on Facebook</DropdownMenuItem>
              <DropdownMenuItem>Share on Twitter</DropdownMenuItem>
              <DropdownMenuItem>Share on Instagram</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </footer>
    </div>
  )
}