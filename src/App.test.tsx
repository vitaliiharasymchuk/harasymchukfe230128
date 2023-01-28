import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import App from "./App";

test("renders App", () => {
    const { container } = render(<Provider store={store}>
        <App />
    </Provider>);
    const appContainer = container.getElementsByClassName("container")[0];
    expect(appContainer).toBeInTheDocument();
});
