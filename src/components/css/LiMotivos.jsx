import { HandHeart } from 'lucide-react'

function LiMotivos(props){
    return(
        <li {...props} className="py-5 flex items-start gap-2">
            <HandHeart />
            {props.children}
        </li>
    )
}

export default LiMotivos