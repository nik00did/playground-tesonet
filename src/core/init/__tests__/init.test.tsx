import { createRoot } from "react-dom/client";

import init from "../init";

const mockCreatedRoot = {
  render: jest.fn(),
};

jest.mock("react-dom/client", () => ({
  createRoot: jest.fn(() => mockCreatedRoot),
}));

describe("init", () => {
  test("should call getElementById with not existing root", () => {
    const mockedGetElementById = jest
      .spyOn(document, "getElementById")
      .mockReturnValue(null);

    init();

    expect(mockedGetElementById).toHaveBeenCalled();
    expect(createRoot).toHaveBeenCalledTimes(0);
  });

  test("should call call createRoot", () => {
    const mockElement = { id: "root" } as HTMLElement;
    jest.spyOn(document, "getElementById").mockReturnValue(mockElement);

    init();

    expect(createRoot).toHaveBeenCalled();
  });

  test("should call call created root render", () => {
    const mockElement = { id: "root" } as HTMLElement;
    jest.spyOn(document, "getElementById").mockReturnValue(mockElement);

    init();

    expect(mockCreatedRoot.render).toHaveBeenCalled();
  });
});
