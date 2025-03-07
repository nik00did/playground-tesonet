import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Context from "../Context";
import { Props } from "./types";
import { ROUTERS, TOKEN_KEY } from "../../constants";
import { LoginParams } from "../types";
import { authorizeRequest } from "../utils";

const Provider: React.FC<Props> = (props) => {
  const [token, setToken] = useState(localStorage.getItem(TOKEN_KEY) || "");
  const navigate = useNavigate();

  const login = async (params: LoginParams) => {
    try {
      const response = await authorizeRequest(params);
      const res = await response.json();

      if (!res.token) {
        throw new Error("login error");
      }

      setToken(res.token);
      localStorage.setItem(TOKEN_KEY, res.token);
      navigate(ROUTERS.serverList);
    } catch (error) {
      console.error(error);
    }
  };

  const logout = () => {
    setToken("");
    localStorage.removeItem(TOKEN_KEY);
    navigate(ROUTERS.login);
  };

  return (
    <Context.Provider
      value={{ token, login, logout }}
      children={props.children}
    />
  );
};

export default Provider;
