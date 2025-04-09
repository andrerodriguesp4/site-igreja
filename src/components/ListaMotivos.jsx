import LiMotivos from './css/LiMotivos.jsx'
import dadosMotivos from './dados/DadosMotivos.jsx';

const motivosOracao = dadosMotivos;
function ListaMotivos(){
    return(
        motivosOracao.map((motivo, index) => 
            <LiMotivos key={index}>{motivo}</LiMotivos>
        )
    )
}

export default ListaMotivos