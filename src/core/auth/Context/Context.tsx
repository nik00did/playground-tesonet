import { createContext, useContext as useReactContext } from "react";
import { Context as ContextType } from "./types";

const Context = createContext<ContextType | null>(null);

export const useContext = (): ContextType | null => useReactContext(Context);

export default Context;
