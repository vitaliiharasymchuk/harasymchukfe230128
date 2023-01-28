import React from "react";
import { queries, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import UsersWidget from "./UsersWidget";
import { IUser } from "../../utils/types";

const testUsers1: IUser[] = [];

const testUsers2: IUser[] = [{
    "phone": "902-738-3242",
    "name": "Geordan Aaryn",
    "nickname": "@geordanaaryn",
    "email": "geordan.aaryn@fallinhay.com",
    "position": "Chief Executive Officer",
    "photo": "1.jpg"
}];

const testUsers3: IUser[] = [
    {
        "phone": "902-738-3242",
        "name": "Geordan Aaryn",
        "nickname": "@geordanaaryn",
        "email": "geordan.aaryn@fallinhay.com",
        "position": "Chief Executive Officer",
        "photo": "1.jpg"
    },
    {
        "phone": "902-782-3286",
        "name": "Brazil Izair",
        "nickname": "@brazilizair",
        "email": "brazil.izair@fallinhay.com",
        "position": "Managing Director",
        "photo": "2.jpg"
    },
    {
        "phone": "902-739-3333",
        "name": "Selman Winston",
        "nickname": "@selmanwinston",
        "email": "selman.winston@fallinhay.com",
        "position": "Chief Visionary Officer",
        "photo": "3.jpg"
    }
];

test("renders UsersWidget", () => {
    const { container } = render(<Provider store={store}>
        <UsersWidget users={testUsers1} />
    </Provider>);
    const appContainer = container.getElementsByClassName("container")[0];
    expect(appContainer).toBeInTheDocument();
});

test("renders UsersWidget with 1 user", () => {
    render(<Provider store={store}>
        <UsersWidget users={testUsers2} />
    </Provider>);
    const h2WithUserName = screen.getByText(testUsers2[0].name);
    expect(h2WithUserName).toBeInTheDocument();
});

test("renders UsersWidget with 3 users", () => {
    render(<Provider store={store}>
        <UsersWidget users={testUsers3} />
    </Provider>);
    const h2WithUserNames: ReturnType<queries.GetByText>[] = [];
    testUsers2.forEach(user => h2WithUserNames.push(screen.getByText(user.name)));
    h2WithUserNames.forEach(el => expect(el).toBeInTheDocument());
});