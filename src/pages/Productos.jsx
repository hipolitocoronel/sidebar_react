import { Header } from "../components/header/Header";
import { Main } from "../components/main/Main";
import { Sidebar } from "../components/sidebar/Sidebar";

export const Productos = () => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="page-content">
                <Header />
                <Main title={"Productos"} button='Nuevo Producto'/>
            </div>
        </div>
    );
};
