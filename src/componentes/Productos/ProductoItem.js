import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from "../../Context/Dataprovider";

export const ProductoItems = ({
    id,
    title,
    price,
    image,
    category,
    
}) => {

const value = useContext(DataContext);
const addCarrito = value.addCarrito;

    return(
        <div className="producto">
         <Link to={`/producto/${id}`}>
            <div className="producto_img text-aling-center">
                <img src={image.default} alt=""/>
            </div>
        </Link>
        <div className="producto_footer">
            <h1>{title}</h1>
            <p>{category}</p>
            <p className="precio">{price}</p>
        </div>
        <div className="bottom">
            <button className="btn" onClick={() => addCarrito(id)} >
                añadir al carrito
            </button>
            <div>
            <Link to={`/producto/${id}`} className="btn">vista</Link>
            </div>
        </div>
        </div>
    
    )
}