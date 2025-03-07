import { render } from "@testing-library/react";
import ServerList from "../ServerList";

describe("ServerList component", () => {
  test("should be rendered successfully", () => {
    const renderedServerList = render(<ServerList />);

    expect(renderedServerList.container).toBeTruthy();
  });
});
