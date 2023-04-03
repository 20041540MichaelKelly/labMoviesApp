import React, { useState, useEffect } from "react";
import { Navigate, Outlet} from 'react-router-dom';
import LoginPage from '../../pages/loginPage';
import isLoggedIn from "../../hooks/isLoggedIn";

function PrivateRoute (){
    const { session } = isLoggedIn();
    

    var auth = session;

    
    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return (auth ? <Outlet /> : <LoginPage />);

}

export default PrivateRoute;