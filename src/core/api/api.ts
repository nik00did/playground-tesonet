import { LoginParams } from "../auth/types";
import { SERVER_LEST_URL, TOKENS_URL } from "../constants";
import type { ServerList } from "../types";

export const authorizeRequest = async (params: LoginParams) => await fetch(TOKENS_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  });

export const getServerList = async (token: string): Promise<ServerList> => {
    const response = await fetch(SERVER_LEST_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  
    return response.json();
  };