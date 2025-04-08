import { Calendar } from "lucide-react"

function LiAvisos(props){
    return(
        <li {...props} className="py-10 flex items-start gap-2">
            <Calendar />
            {props.children}
        </li>
    )
}

export default LiAvisos