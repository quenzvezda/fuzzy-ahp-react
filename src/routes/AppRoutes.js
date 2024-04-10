import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import HomePage from '../pages/HomePage';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route element={<PublicRoute />}>
                    <Route path="/" element={<HomePage />} />
                </Route>
                {/* Uncomment this when you have a LoginPage and isAuthenticated function */}
                {/* <Route element={<PrivateRoute />}>
                    <Route path="/dashboard" element={<DashboardPage />} />
                </Route> */}
            </Routes>
        </Router>
    );
};

export default AppRoutes;
