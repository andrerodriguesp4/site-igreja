import { CalendarClock } from "lucide-react"

function LiReunioes(props){
    return(
        <li {...props} className="py-3 flex items-start gap-2">
            <CalendarClock/>
            {props.children}
        </li>
    )
}

export default LiReunioes