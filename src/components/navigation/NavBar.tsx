import React from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button"
import {Link} from "react-router-dom"


export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)
    return (
        <header className="bg-black text-white p-4 sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <Link to='/Blessd-Web/'><h1 className="text-2xl font-bold">Blessd </h1> </Link>
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
              <li><Link to="/Blessd-Web/Videos" className="hover:text-blue-300">Videos</Link></li>
              <li><Link to="/Blessd-Web/Gallery" className="hover:text-blue-300">Galería</Link></li>
              <li><Link to="/Blessd-Web/Interviews" className="hover:text-blue-300">Entrevistas</Link></li>
            </ul>
          </nav>
        </div>
      </header>
    )
}