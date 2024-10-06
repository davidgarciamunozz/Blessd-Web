import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

export default function Hero () {
    return (
        <section className="mb-12 mt-10 relative overflow-hidden rounded-lg">
          <div className="h-96 md:h-[28rem] lg:h-[32rem] relative">
            <img
              src="https://wmerchshop.com/cdn/shop/files/banner_beige_horizontal_2808x.jpg?v=1727210553"
              alt="Featured Artist"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 flex items-end">
              <div className="p-8">
                <Link to='/Blessd-Web/History'><Button className="bg-white text-blue-900 hover:bg-blue-100">Conoce su historia</Button></Link>
              </div>
            </div>
          </div>
        </section>
    )
}