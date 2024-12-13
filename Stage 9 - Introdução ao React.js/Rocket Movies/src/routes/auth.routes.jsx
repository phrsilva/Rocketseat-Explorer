import { Routes, Route } from "react-router-dom";
import {Login} from "../pages/login"
import {Cadastrar} from "../pages/cadastrar"

export function AuthRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/cadastrar" element={<Cadastrar />} />
        </Routes>
    );
}