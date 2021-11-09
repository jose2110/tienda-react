import React from 'react'
import {Switch, Route} from "react-router-dom"
import { Inicio } from "./Inicio/Index"
import {ProductosLista} from "./Productos/Index"
import {ProductoDetalles} from "./Productos/ProductoDetalle.js"

export const Pagina = () => {
    return(
        <section>
            <Switch>
                <Route path="/" exact component={Inicio} />
                <Route path="/producto" exact component={ProductosLista} />
                <Route path="/producto/:id" exact component={ProductoDetalles} />
            </Switch>
        </section>
    )
}