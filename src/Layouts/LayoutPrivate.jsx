import {  Outlet } from "react-router-dom";

import {  useUserContext } from "../context/UserContext";


const LayoutPrivate = () => {
    const { user } = useUserContext()
    console.log(user);

    return user ? <><Outlet /></> : <></>;
};

export default LayoutPrivate;
