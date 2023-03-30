// Pagina inicial 
// Componente-pagina é aquilo que retorna um html
// Componente é aquilo que é apenas uma função

import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
    const Navigate = useNavigate();
    const handleClick = () => {
        Navigate("/login");
    }
    return (
        <div>
            <p>Dashboard</p>
            <button type="button" onClick={handleClick}>
                Login
            </button>
        </div>
    );
}