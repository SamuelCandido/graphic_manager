// Aqui é definido as rotas

import { BrowserRouter, Route, Routes as Switch, Navigate } from "react-router-dom";

import { Dashboard, Login  } from "../pages";

export const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Dashboard />} />
                <Route path="*" element={<Navigate to="/home" />} />
            </Switch>
        </BrowserRouter>
    )
}