import { render } from "@testing-library/react";
import {} from "react-router-dom";
import Router from "../Router";

describe("Router component", () => {
  test("should be rendered successfully", () => {
    const renderedRouter = render(<Router />);

    expect(renderedRouter.container).toBeTruthy();
  });
});
