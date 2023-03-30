// Pagina inicial 
// Componente-pagina é aquilo que retorna um html
// Componente é aquilo que é apenas uma função

import { Link } from "react-router-dom";

export const Dashboard = () => {
    return (
        <div>
            <p>Dashboard</p>
            <Link to="/home"></Link>
        </div>
    );
}