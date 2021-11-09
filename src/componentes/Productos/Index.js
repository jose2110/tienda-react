import React, {useContext} from 'react';

import {DataContext} from "../../Context/Dataprovider"
import {ProductoItems} from "./ProductoItem"

export const ProductosLista = () => {

   const value = useContext(DataContext)
   const [productos] = value.productos
   

    return (
        <>
        <h1 className="title">PRODUCTOS</h1>
    <div className="productos">
        {productos.map(producto =>(
        <ProductoItems 
            key={producto.id}
            
            id={producto.id}
            title={producto.title}
            price={producto.price}
            image={producto.image}
            category={producto.category}
            cantidad={producto.cantidad}
        />
    ))}

      
</div>
</>
    )
}