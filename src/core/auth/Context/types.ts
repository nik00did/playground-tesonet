import { LoginParams } from "../types";

export type Context = {
    token: string;
    login: (params: LoginParams) => void;
    logout: () => void;
};