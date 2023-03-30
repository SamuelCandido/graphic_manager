import { useNavigate } from "react-router-dom";

export const Login = () => {
  const Navigate = useNavigate();
  const handleClick = () => {
    Navigate("/home");
  }
  return (
    <div>
      <button type="button" onClick={handleClick}>
        Go home
      </button>
    </div>
  );
}