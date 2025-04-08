import LiMotivos from './css/LiMotivos.jsx'

const motivosOracao = [
    "Saúde da irmã Maria",
    "Emprego para o irmão João",
    "Família do irmão Carlos",
    "Viagem missionária do pastor André",
    "Cura emocional da jovem Larissa",
    "Conversão de familiares da irmã Ana",
    "Sabedoria para os líderes da igreja",
    "Restauração do casamento de Paulo e Juliana",
    "Jovens que farão vestibular",
    "Proteção das crianças da comunidade",
  ];

function ListaMotivos(){
    return(
        motivosOracao.map((motivo, index) => 
            <LiMotivos key={index}>{motivo}</LiMotivos>
        )
    )
}

export default ListaMotivos