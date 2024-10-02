import { Mic } from 'lucide-react'
import { Button } from '@/components/ui/button'

function InterviewsPreview () {
    return (
        <section id="interviews" className="mb-12">
        <h3 className="text-2xl font-bold mb-4 flex items-center text-white">
          <Mic className="mr-2" /> Entrevistas Exclusivas
        </h3>
        <div className="bg-blue-800 rounded-lg shadow-md p-4 text-white">
          <h4 className="font-bold mb-2">Entrevistas</h4>
          <p>Blessd comparte su proceso creativo detrás de sus éxitos</p>
          <Button className="mt-2 bg-white text-blue-900 hover:bg-blue-100">Ver Entrevista</Button>
        </div>
      </section>
    )
}

export default InterviewsPreview