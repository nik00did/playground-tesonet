jest.mock("react-router-dom", () => ({
    BrowserRouter: jest.fn(),
    Routes: jest.fn(),
    Route: jest.fn(),
}));