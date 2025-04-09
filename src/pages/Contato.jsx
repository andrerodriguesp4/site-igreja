import { Mail, Phone, Send } from 'lucide-react'
import H1title from '../components/css/H1title.jsx'

function Contato(){
    return(
        <div className='flex justify-center pb-10'>
            <div>
                <div className='flex justify-center items-center'>
                    <Send size={30}/>
                    <H1title>Contato</H1title>
                </div>
                <div className='bg-red-200 rounded-md border'>
                    <div className='flex items-center gap-2 py-2 px-8 hover:bg-green-300 hover:cursor-default'>
                        <Phone/>
                        <h2 className='text-2xl'>Tel: <span className='text-xl'><em>(35) 3371-1788</em></span></h2>

                    </div>
                    <div className='flex items-center gap-2 py-2 px-8 hover:bg-green-300 hover:cursor-default'>
                        <Mail/>
                        <h2 className='text-2xl'>E-mail: <span className='text-xl'><em>departamentopessoal@familiacontabil.com</em></span></h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contato