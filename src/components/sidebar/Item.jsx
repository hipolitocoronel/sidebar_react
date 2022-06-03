import { NavLink } from "react-router-dom"

export const Item=({item})=>{
      const isActive=false;
      return(
            <NavLink to={item.to} className={'active' ? isActive : null}>
                  <i class={item.icon} aria-hidden="true"></i>
                  {item.nombre}
            </NavLink>
      )
      
}