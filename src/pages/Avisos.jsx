import { Bell } from "lucide-react";
import ListaAvisos from "../components/Listaavisos";
import H1title from "../components/css/H1title";

function Avisos() {
  return (
    <div className="flex justify-center">
      <div className="pb-10 px-8">
        <div className="flex items-center justify-center">
          <Bell />
          <H1title>
            Avisos
          </H1title>
        </div>
        <div className="border rounded-md bg-green-200">
          <ul className="list-disc">
            <ListaAvisos />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Avisos;
