import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import {Button} from "@/components/ui/button"
import { Share2 } from 'lucide-react'

function Footer () {
    return (

      <footer className="bg-black text-white p-4">
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
    )
}

export default Footer