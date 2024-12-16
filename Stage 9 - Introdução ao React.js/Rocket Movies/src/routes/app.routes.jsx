import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/home";
import { Novo } from "../pages/novoFilme";
import { Sinopse } from "../pages/sinopse";
import { Perfil } from "../pages/perfil";

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<Novo />} />
            <Route path="/sinopse/:id" element={<Sinopse />} />
            <Route path="/perfil" element={<Perfil />} />
        </Routes>
    );
}