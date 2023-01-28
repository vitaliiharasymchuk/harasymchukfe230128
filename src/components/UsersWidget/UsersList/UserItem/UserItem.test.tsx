import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../../store/store";
import UserItem from "./UserItem";

const testName: string = "test name";
const testNickname: string = "test nickname";
const testPhoto: string = "1.jpg";

test("renders UserItem", () => {
    const { getByRole } = render(<Provider store={store}>
        <UserItem name={testName} nickname={testNickname} photo={testPhoto} />
    </Provider>);
    const h2WithUserName = screen.getByText(testName);
    const h3WithUserName = screen.getByText(testNickname);
    const userImage = getByRole("img");
    expect(h2WithUserName).toBeInTheDocument();
    expect(h3WithUserName).toBeInTheDocument();
    expect(userImage).toBeInTheDocument();
});