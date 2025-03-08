import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "../../App";

const init = (): void => {
  const rootElement = document.getElementById("root");

  if (!rootElement) {
    return;
  }

  const root = createRoot(rootElement);

  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
};

export default init;
