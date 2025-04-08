import { Bell } from "lucide-react";
import LiAvisos from "../components/css/LiAvisos";
import Listaavisos from "../components/Listaavisos";
import H1title from "../components/css/H1title";

function Avisos() {
  return (
    <div className="flex justify-center pb-10">
      <div>
        <div className="flex items-center justify-center">
          <Bell />
          <H1title>
            Avisos
          </H1title>
        </div>
        <div className="px-8 border-2 rounded-md bg-green-200">
          <ul className="list-disc">
            <Listaavisos />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Avisos;
