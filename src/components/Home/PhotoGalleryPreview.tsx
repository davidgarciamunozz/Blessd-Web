import { Camera } from 'lucide-react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

function PhotoGalleryPreview () {
    useEffect (() => {
      scrollTo(0,0)
    } , [])
    return (
        <section id="gallery" className="mb-12">
        <h3 className="text-2xl font-bold mb-4 flex items-center text-white">
          <Link className='flex items-center' to='/Blessd-Web/Gallery'>
          <Camera className="mr-2" /> Galería de Fotos
          </Link>
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
    )
}

export default PhotoGalleryPreview