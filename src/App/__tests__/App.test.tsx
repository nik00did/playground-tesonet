import { render } from "@testing-library/react";
import App from "../App";

describe("App component", () => {
  test("should render successfully", () => {
    const renderedApp = render(<App />);

    expect(renderedApp.container).toBeTruthy();
  });
});
