import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
// Uncomment this when you have the isAuthenticated function
// import { isAuthenticated } from '../utils/auth';

const PrivateRoute = () => {
    // return isAuthenticated() ? <Outlet /> : <Navigate to="/login" />;
    // For now, just redirect to home page as there's no authentication
    return <Navigate to="/" />;
};

export default PrivateRoute;
