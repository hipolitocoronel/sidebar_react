import "./style.css";
import React from "react";
import { Item } from "./Item";
import { NavLink } from "react-router-dom";
export const Sidebar = () => {
    const items = [
        {
            nombre: "Inicio",
            to: "/",
            icon: "fi fi-rr-home pr-3",
        },
        {
            nombre: "Ventas",
            to: "/ventas",
            icon: "fi fi-rr-shopping-bag pr-3",
        },
        {
            nombre: "Productos",
            to: "/productos",
            icon: "fi fi-rr-box pr-3",
        },
        {
            nombre: "Clientes",
            to: "/clientes",
            icon: "fi fi-rr-mode-portrait pr-3",
        },
        {
            nombre: "Configuración",
            to: "/configuracion",
            icon: "fi fi-rr-settings pr-3",
        },
    ];
    return (
        <>
            <div className="sidebar-content bg-sky-600">
                <div className="sidebar-brand-content">
                    <NavLink className="sidebar-brand-text" to="/">
                    <i class="fi fi-rr-bolt pr-1"></i>
                        SimplePOS
                    </NavLink>
                </div>
                <div className="sidebar-items-content">
                    {items.map((item) => (
                        <Item item={item} />
                    ))}
                </div>
            </div>
        </>
    );
};
