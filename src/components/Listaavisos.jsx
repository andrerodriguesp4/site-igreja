import LiAvisos from "./css/LiAvisos";

const Listadeavisos = [
  "Culto de Ceia neste domingo, às 19h. Participe com oração e reverência.",
  "Escola Bíblica Dominical às 9h — para todas as idades!",
  "Reunião de Oração quarta-feira, às 19h30. Todos são bem-vindos.",
  "Campanha de Alimentos: traga doações até o próximo domingo.",
  "Treinamento de Professores sábado às 15h, no salão social.",
];

function Listaavisos() {
  return Listadeavisos.map((aviso, index) => (
    <LiAvisos key={index}>{aviso}</LiAvisos>
  ));
}

export default Listaavisos;
