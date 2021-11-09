import React from "react";
import {Header} from './componentes/Header/Index'
import {BrowserRouter as Router} from "react-router-dom"
import {Pagina} from "./componentes/Paginas"
import {DataProvider} from "./Context/Dataprovider.js"
import {Carrito} from "./componentes/Carrito/Index"
import 'boxicons';


function App() {
  return (
    <DataProvider>
    <div className="App">
      <Router>
    <Header/>
    <Carrito/>
    <Pagina/>
    </Router>
    </div>
    </DataProvider>

  );
}

export default App; 
