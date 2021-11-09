import React, {useContext} from 'react'
import Logo from "../../Imagenes/logo.jpg"

import {Link} from "react-router-dom";
import {DataContext} from "../../Context/Dataprovider";





export const Header = () => {
const value = useContext(DataContext);
const [menu, setMenu] = value.menu;
const [carrito] = value.carrito;

const toogleMenu = () =>{
    setMenu(!menu)
}

    return (
        <header>
            
                <Link to="/">
                <div className="logo">
                   <img src={Logo} alt="" width="100" />
                </div>
                </Link>
          
            <nav className="menu">
            <ul>
                <li><Link to="/">inicio</Link></li>
                <li><Link to="./producto">productos</Link></li>
            </ul>   
            </nav>
            <div className="cart" onClick={toogleMenu}>
                <box-icon name="cart"></box-icon>
                <span className="item_total">{carrito.length}</span>
            </div>    
        </header>
       
    )
}