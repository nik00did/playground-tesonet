import { TOKENS_URL } from "../constants";
import { LoginParams } from "./types";

export const authorizeRequest = async (params: LoginParams) => await fetch(TOKENS_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  });