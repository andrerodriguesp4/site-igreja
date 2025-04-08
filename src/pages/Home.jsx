import imagemcalcada from './images/imagemcalcada.jpg'
import descricao from './texts/Descricao.jsx'

function Home(){
    return(
        <div className='pb-10'>
            <div className='flex justify-center items-center p-5'>
                <img src={imagemcalcada} alt="Imagem Fachada" className='w-1/2 h-auto rounded-md' />
            </div>
            <div className='flex justify-center'>
                <p className='whitespace-pre-line max-w-4xl'>{descricao}</p>
            </div>
        </div>
    )
}

export default Home