import React, {useContext, useState, useEffect} from "react";
import {DataContext} from "../../Context/Dataprovider.js";
import {useParams} from "react-router-dom";

export const ProductoDetalles = () => {
const value = useContext(DataContext)
const [productos] = value.productos;
const [detalle, setDetalle] = useState ([])
const params = useParams();

useEffect(() =>{
    productos.forEach(producto =>{
        
        if(producto.id === parseInt(params.id)){
setDetalle(producto)

        }
    
    })
},[params.id, productos])

    return (
    <>
        {
            <div className="detalles">
                <h2>{detalle.title}</h2>
                <p className="price">{detalle.price}</p>
                
                <button> añadir al carrito</button>
                <img src={detalle.image.default} alt={detalle.title}/>
                
                <div className="descripcion">
                    <p><b>description:</b> Fragmento de un escrito con unidad temática, que queda diferenciado del resto de fragmentos por un punto y aparte y generalmente también por llevar letra mayúscula inicial y un espacio en blanco en el margen izquierdo de alineación del texto principal de la primera línea.</p>
                </div>
            </div>
        }
    </>

    )
}