import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../utils/types";
import { mockUsers } from "../../data/mockData";

interface IUsersState {
    users: IUser[];
    selectedUser: IUser | null;
}

const initialState: IUsersState = {
    users: mockUsers,
    selectedUser: null
};

export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        setSelectedUser(state, action: PayloadAction<string | null>) {
            if (action.payload) {
                const user = state.users.find(el => el.nickname === action.payload);
                if (user) {
                    state.selectedUser = user;
                }
            } else {
                state.selectedUser = null;
            }
        }
    }
});

export const { setSelectedUser } = usersSlice.actions;

export default usersSlice.reducer;
