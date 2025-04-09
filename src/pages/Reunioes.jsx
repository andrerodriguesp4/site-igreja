import { ClipboardList } from 'lucide-react'
import H1title from '../components/css/H1title.jsx'
import ListaReunioes from '../components/ListaReunioes'

function Reunioes(){
    return(
        <div className="flex justify-center">
            <div>
                <div className='flex justify-center items-center'>
                    <ClipboardList size={30}/>
                    <H1title>Reuniões</H1title>
                </div>
                <div className="px-8 border rounded-md bg-yellow-200">
                    <ListaReunioes/>
                </div>
            </div>
        </div>
    )
}

export default Reunioes