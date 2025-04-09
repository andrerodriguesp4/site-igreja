import LiAvisos from "./css/LiAvisos";
import dadosAvisos from "./dados/DadosAvisos";

const Listadeavisos = dadosAvisos;

function ListaAvisos() {
  return Listadeavisos.map((aviso, index) => (
    <LiAvisos key={index}>{aviso}</LiAvisos>
  ));
}

export default ListaAvisos;
