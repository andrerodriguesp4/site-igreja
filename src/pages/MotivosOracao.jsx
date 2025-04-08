import { Church } from 'lucide-react'
import H1title from '../components/css/H1title.jsx'
import ListaMotivos from '../components/ListaMotivos.jsx'

function MotivosOracao(){
    return(
        <div className='flex justify-center pb-10'>
            <div>
                <div className='flex items-center'>
                    <Church/>
                    <H1title>Motivos de Oração</H1title>
                </div>
                <div className="px-8 border-2 rounded-md bg-blue-200">
                    <ul className='list-disc'>
                        <ListaMotivos/>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MotivosOracao