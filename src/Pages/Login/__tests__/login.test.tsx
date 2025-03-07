import { render } from "@testing-library/react";
import * as auth from "../../../core/auth";
import Login from "../Login";
import { mockContext } from "./__mocks__";

jest.mock("../../../core/auth", () => ({
  useAuth: jest.fn(),
}));

describe("Login component", () => {
  test("should be rendered when auth data exists", () => {
    const mockUseAuth = jest
      .spyOn(auth, "useAuth")
      .mockReturnValue(mockContext);

    const renderedLogin = render(<Login />);

    expect(mockUseAuth).toHaveBeenCalled();
    expect(renderedLogin.container).toBeTruthy();
  });

  test("should be rendered data when there is no auth data", () => {
    const mockUseAuth = jest.spyOn(auth, "useAuth").mockReturnValue(null);

    render(<Login />);

    expect(mockUseAuth).toHaveBeenCalled();
  });
});
