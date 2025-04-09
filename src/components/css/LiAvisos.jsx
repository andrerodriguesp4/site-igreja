import { Calendar } from "lucide-react"

function LiAvisos(props){
    return(
        <li {...props} className="py-3 px-8 flex items-start gap-2 hover:bg-green-300 hover:cursor-default">
            <Calendar />
            {props.children}
        </li>
    )
}

export default LiAvisos