import React, { useState, useEffect } from "react";
import { Navigate, Outlet} from 'react-router-dom';
import LoginPage from '../../pages/loginPage';
import isLoggedIn from "../../hooks/isLoggedIn";
import SiteHeader from "../siteHeader";
import ShowSiteHeader from "../showSiteHeader";

function PrivateRoute (){
    const { session } = isLoggedIn();
    

    var auth = session;

    
    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return (auth ? <ShowSiteHeader /> : <LoginPage />);

}

export default PrivateRoute;