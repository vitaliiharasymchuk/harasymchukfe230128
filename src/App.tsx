import React from "react";
import { useAppSelector } from "./hooks/hooks";
import UsersWidget from "./components/UsersWidget/UsersWidget";
import style from "./App.module.css";

const App = () => {
    const { users } = useAppSelector(state => state.mainReducer);

    return (
        <div className={style.container}>
            <UsersWidget users={users} />
        </div>
    );
};

export default App;
