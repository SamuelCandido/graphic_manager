import { BrowserRouter, Route, Routes as Switch, Navigate } from "react-router-dom";

import { Dashboard} from "../pages";

export const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route  path="/" Component={() => <h1>Está é a rota padrão o link deste repositorio se encontra aqui:</h1>} />
                
                <Route path="/home" element={<Dashboard />} />

                <Route path="*" element={<Navigate to="/home" />} />

            </Switch>
        </BrowserRouter>
    )
}