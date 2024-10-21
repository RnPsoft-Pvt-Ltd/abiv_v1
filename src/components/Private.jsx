import React from "react";
 
    import { Navigate, Outlet } from "react-router-dom";
const Private=()=>{
    const auth=  localStorage.getItem("auth-token");
    return (auth ? <Outlet />:<Outlet/> );
}
export default Private;