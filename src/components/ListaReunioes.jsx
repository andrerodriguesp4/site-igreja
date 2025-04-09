import LiReunioes from "./css/LiReunioes";
import dataReunioes from "./dados/DadosReunioes";

const reunioes = dataReunioes;
function ListaReunioes(){
    return(
        reunioes.map((reuniao, index) => 
            <div key={index} className="py-3">
                <ul className="border-2 border-slate-500 bg-slate-200 rounded-md p-1 hover:bg-green-300 hover:cursor-default">
                    <LiReunioes>Reunião</LiReunioes>
                    <p>Data: {reuniao.data}</p>
                    <p>Local: {reuniao.local}</p>
                    <p>Sociedade: {reuniao.sociedade}</p>
                </ul>
            </div>
        )
    )
}

export default ListaReunioes