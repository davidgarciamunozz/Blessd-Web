import { useState } from 'react'
import NavBar from "@/components/navigation/NavBar"
import Footer from "@/components/navigation/Footer"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { X } from 'lucide-react'

type Album = {
  id: number
  title: string
  type: string
  coverUrl: string
}

const albums: Album[] = [
  { id: 1, title: "Piponas Remix Footage [Kris R] ", type: "REMIX", coverUrl: "https://images.genius.com/9fa3a08490b328ef67d79a2599cf78cd.1000x1000x1.png" },
  { id: 2, title: "Piponas Remix Footage [Kris R]", type: "REMIX", coverUrl: "https://instagram.fclo1-3.fna.fbcdn.net/v/t39.30808-6/461689539_18465122299019732_1086734659464317666_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fclo1-3.fna.fbcdn.net&_nc_cat=108&_nc_ohc=MmtcPzmuvE4Q7kNvgE4SwPr&_nc_gid=8cb2601a229a4d89af87f856cd2c0821&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzQ2ODY5MDIyOTk5NTQ3OTY4Nw%3D%3D.3-ccb7-5&oh=00_AYA9018Au2PA7HNOisLr5mQg91FGOaMTA0QBN8-6pITCXQ&oe=67092DB9&_nc_sid=10d13b" },
  { id: 3, title: "Barrio Antioquia", type: "REMIX", coverUrl: "https://instagram.fclo1-3.fna.fbcdn.net/v/t39.30808-6/461764348_18465122308019732_6384399341725147846_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fclo1-3.fna.fbcdn.net&_nc_cat=108&_nc_ohc=4raxpul0DRQQ7kNvgFHclr2&_nc_gid=8cb2601a229a4d89af87f856cd2c0821&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzQ2ODY5MDIyOTUzNDExNDkwNw%3D%3D.3-ccb7-5&oh=00_AYCXBd0lbWkZZZaerqAlEdzepWHDjXiUySsZKeZHkEAixg&oe=670926E2&_nc_sid=10d13b" },
  { id: 4, title: "Blessd Luxury", type: "SINGLE", coverUrl: "https://instagram.fclo1-3.fna.fbcdn.net/v/t39.30808-6/461776764_18465122317019732_3707617093255592007_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fclo1-3.fna.fbcdn.net&_nc_cat=108&_nc_ohc=2_7iMQl2HwIQ7kNvgGl1ZGm&_nc_gid=8cb2601a229a4d89af87f856cd2c0821&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzQ2ODY5MDIyOTU3NTk4MDQ5OA%3D%3D.3-ccb7-5&oh=00_AYD3A2Ev1DMgDQDhkdIdYsVgxmUbbLJv_Ozgdp9NwN4IOA&oe=67092FA5&_nc_sid=10d13b" },
  { id: 5, title: "The King & I", type: "ALBUM", coverUrl: "https://instagram.fclo1-3.fna.fbcdn.net/v/t39.30808-6/461872874_18465122326019732_7545909489814444529_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fclo1-3.fna.fbcdn.net&_nc_cat=108&_nc_ohc=yiO5yeH_quYQ7kNvgHeFcj6&_nc_gid=8cb2601a229a4d89af87f856cd2c0821&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzQ2ODY5MDIyOTk3ODUxODAxNw%3D%3D.3-ccb7-5&oh=00_AYCDYG2Z8YClFqzinePv2gh9fxFSqW_l2_N9mS4cp5PYnQ&oe=670948DE&_nc_sid=10d13b" },
  { id: 6, title: "Backstage (Expanded Edition)", type: "ALBUM", coverUrl: "https://instagram.fclo1-3.fna.fbcdn.net/v/t39.30808-6/461737483_18465122338019732_2729139239509342376_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fclo1-3.fna.fbcdn.net&_nc_cat=108&_nc_ohc=j7ViyLngUJwQ7kNvgHPuJnP&_nc_gid=8cb2601a229a4d89af87f856cd2c0821&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzQ2ODY5MDIzMjU2MjM4NDkzOA%3D%3D.3-ccb7-5&oh=00_AYC8aqi2cbZGximQAzUxqROMa7W7uDgAaQVU34tfEGIkgw&oe=67091FB4&_nc_sid=10d13b" },
  { id: 7, title: "Production", type: "ALBUM", coverUrl: "https://instagram.fclo1-3.fna.fbcdn.net/v/t39.30808-6/461804375_18465122353019732_855391394928976841_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fclo1-3.fna.fbcdn.net&_nc_cat=108&_nc_ohc=rlwIPjV8Dx8Q7kNvgHxdqxz&_nc_gid=8cb2601a229a4d89af87f856cd2c0821&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzQ2ODY5MDIyOTgxMDc1MTYyNA%3D%3D.3-ccb7-5&oh=00_AYA0_DStX2jlWSx6Thilhm7lrJrEfdmK5XIceRJTHXBx7Q&oe=67093841&_nc_sid=10d13b" },
  { id: 8, title: "Recording [House]", type: "SINGLE", coverUrl: "https://instagram.fclo1-3.fna.fbcdn.net/v/t39.30808-6/461692075_18465122365019732_8966173449485056338_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fclo1-3.fna.fbcdn.net&_nc_cat=108&_nc_ohc=HLCBfvk8NeEQ7kNvgFOX-gJ&_nc_gid=8cb2601a229a4d89af87f856cd2c0821&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzQ2ODY5MDIzMDE3MTYyMDE1Mw%3D%3D.3-ccb7-5&oh=00_AYCZw09EgQVr4ML9bUoCeGnY7-JFweeAB9CObULUjBFD9A&oe=67092EBF&_nc_sid=10d13b" },
  { id: 9, title: "Blue", type: "ALBUM", coverUrl: "https://instagram.fclo1-3.fna.fbcdn.net/v/t39.30808-6/461838033_18465122377019732_6431659925817116587_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fclo1-3.fna.fbcdn.net&_nc_cat=108&_nc_ohc=Z8N1K-obrTwQ7kNvgFVs1p5&_nc_gid=8cb2601a229a4d89af87f856cd2c0821&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzQ2ODY5MDIzMDQzMTUxOTM0Mw%3D%3D.3-ccb7-5&oh=00_AYDdldOGcF-3S5bYs3R3ehJLPt9p97fG1XvmT0ag-5bzuA&oe=67093230&_nc_sid=10d13b" }, 
  { id: 10, title: "High Zone", type: "ALBUM", coverUrl: "https://instagram.fclo1-3.fna.fbcdn.net/v/t39.30808-6/454671973_18455520313019732_6555120967525546849_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fclo1-3.fna.fbcdn.net&_nc_cat=108&_nc_ohc=baoYpEgzJikQ7kNvgF6-yhx&_nc_gid=278626b72e9d41929a6dbe5f306657e2&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzQzMjM4MjUxOTQxMDc4ODA0OQ%3D%3D.3-ccb7-5&oh=00_AYC9DOyPLiBeGzJjgtv1SaP2qehy3taqrRLQxRA9Jr-LZQ&oe=67091F6D&_nc_sid=10d13b" },
  { id: 11, title: "Condenado al Éxito ||", type: "ALBUM", coverUrl: "https://instagram.fclo1-3.fna.fbcdn.net/v/t39.30808-6/461696340_18465122386019732_6319516858526670876_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fclo1-3.fna.fbcdn.net&_nc_cat=108&_nc_ohc=K8pDE4q5p7kQ7kNvgHLc7Xl&_nc_gid=8cb2601a229a4d89af87f856cd2c0821&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzQ2ODY5MDIyOTQwODE3NjY2NQ%3D%3D.3-ccb7-5&oh=00_AYATZZ7URd9J_f9Ilj4VN5vxprq8IwQBmEntcIABqVSj3A&oe=67092559&_nc_sid=10d13b" },
  { id: 12, title: "Gracias Dios", type: "SINGLE", coverUrl: "https://instagram.fclo1-3.fna.fbcdn.net/v/t39.30808-6/459887643_18462213493019732_555527205390200019_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fclo1-3.fna.fbcdn.net&_nc_cat=108&_nc_ohc=S7QnNSoRDxoQ7kNvgG9Ipf7&_nc_gid=278626b72e9d41929a6dbe5f306657e2&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzQ1Nzc2NTUzMjcwOTQzOTI3NQ%3D%3D.3-ccb7-5&oh=00_AYC8WNr-fg2BcTgzYsrMjtMycJ4U6hkqdwulXBZ6f6mA7Q&oe=670929A0&_nc_sid=10d13b" }
] 

export default function PhotoGallery() {
  const [hoveredAlbum, setHoveredAlbum] = useState<number | null>(null)
  const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null)

  const openModal = (album: Album) => {
    setSelectedAlbum(album)
  }

  const closeModal = () => {
    setSelectedAlbum(null)
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <NavBar />
      <main className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-8">Galería</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {albums.map((album) => (
            <div
              key={album.id}
              className="relative group"
              onMouseEnter={() => setHoveredAlbum(album.id)}
              onMouseLeave={() => setHoveredAlbum(null)}
            >
              <img
                src={album.coverUrl}
                alt={album.title}
                className="w-full aspect-square object-cover transition-opacity duration-300 group-hover:opacity-70"
              />
              <div className={`absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300 ${hoveredAlbum === album.id ? 'opacity-100' : ''}`}>
                <button
                  className="bg-white text-black px-4 py-2 rounded-full font-bold"
                  onClick={() => openModal(album)}
                >
                  Ver Foto
                </button>
              </div>
              <div className="mt-2">
                <h3 className="font-semibold truncate">{album.title}</h3>
                <p className="text-gray-400 text-sm">{album.type}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />

      <Dialog open={!!selectedAlbum} onOpenChange={closeModal}>
        <DialogContent className="sm:max-w-[90vw] sm:max-h-[90vh] p-0 bg-transparent border-none">
          <div className="relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 p-2 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-75 transition-colors"
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </button>
            {selectedAlbum && (
              <img
                src={selectedAlbum.coverUrl}
                alt={selectedAlbum.title}
                className="w-full h-auto max-h-[90vh] object-contain"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}