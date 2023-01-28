import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../store/store";
import UserInfo from "./UserInfo";
import { IUser } from "../../../utils/types";

const testUser: IUser = {
    phone: "902-738-3242",
    name: "Geordan Aaryn",
    nickname: "@geordanaaryn",
    email: "geordan.aaryn@fallinhay.com",
    position: "Chief Executive Officer",
    photo: "1.jpg"
};

test("renders UserInfo", () => {
    render(<Provider store={store}>
        <UserInfo user={testUser} onClose={() => {
        }} />
    </Provider>);
});

test("test onClose", () => {
    const onClose = jest.fn();
    render(<Provider store={store}>
        <UserInfo user={testUser} onClose={onClose} />
    </Provider>);
    const closeButton = screen.getByText("+");
    expect(closeButton).toBeInTheDocument();
    fireEvent.click(closeButton);
    expect(onClose).toBeCalled();
});