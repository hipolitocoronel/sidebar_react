import "./App.css";
import { Home } from "./pages/Home";
import { Productos } from "./pages/Productos";
import { Ventas } from "./pages/Ventas";
import { Clientes } from "./pages/Clientes";
import { Configuracion } from "./pages/Configuracion";
import { Routes, Route} from "react-router-dom";
function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/ventas" element={<Ventas />}/>
            <Route path="/productos" element={<Productos />}/>
            <Route path="/clientes" element={<Clientes />}/>
            <Route path="/configuracion" element={<Configuracion />}/>
        </Routes>
    )
}

export default App;
