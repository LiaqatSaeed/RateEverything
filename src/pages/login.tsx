import { Button } from "../components";
import { buttonRecipe } from "../styles/button.css";

export const Login = () => (
  <>
    <Button
      className={buttonRecipe({
        color: "login",
        size: "medium",
        rounded: true,
      })}
    >
      Login
    </Button>
  </>
);
