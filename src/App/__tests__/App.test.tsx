import { render } from "@testing-library/react";
import App from "../App";

describe("App component", () => {
  test("should render successfully", () => {
      render(<App />);
      expect(true).toBe(true)
  });
});
