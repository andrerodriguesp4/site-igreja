import { HandHeart } from 'lucide-react'

function LiMotivos(props){
    return(
        <li {...props} className="py-3 px-8 flex items-start gap-2 hover:bg-green-300 hover:cursor-default">
            <HandHeart />
            {props.children}
        </li>
    )
}

export default LiMotivos