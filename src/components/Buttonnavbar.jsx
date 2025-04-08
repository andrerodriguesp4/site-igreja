import { NavLink } from 'react-router-dom'

function Buttonnavbar(props) {
  return (
    <NavLink
      to={props.to}
      className={({ isActive }) =>
        `px-0 sm:px-0 md:px-2 lg:px-4 py-2 text-sm md:text-lg border-2 rounded-md
         hover:bg-green-900 border-transparent
         ${isActive ? 'text-white bg-green-900' : ''}`
      }
    >
      {props.children}
    </NavLink>
  )
}

export default Buttonnavbar