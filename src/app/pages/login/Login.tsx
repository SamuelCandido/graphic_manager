// O state serve para salvar o email e a senha para renderização do react
// Dando suporte para guardar as values
import { useNavigate } from "react-router-dom";

import { useState } from "react";

export const Login = () => {
  const Navigate = useNavigate();

  const handleClick = () => {
    Navigate("/home");
  }

  const handleEntrar = () => {
    Navigate("/home");
  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>

      <form>
        <label>
          <span>Email:</span>
          <input value={email} onChange={e => setEmail(e.target.value)} />
        </label>

        <label>
          <span>Senha:</span>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </label>

        <button type="button" onClick={handleEntrar}>
          Login
        </button>



        <button type="button" onClick={handleClick}>
          Go home
        </button>
      </form>

    </div>
  );
}