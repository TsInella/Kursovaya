import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import {authRoutes, publicRoutes} from "../routes";
import Recommendations from "../pages/Recommendations";
import {RECOMMENDATIONS_ROUTE} from "../utils/consts";

const AppRouter = () => {
    const isAuth = false
    return (
        <Routes>
            {isAuth && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>}  exact/>
                )}
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>}  exact/>
            )}
            <Route path='*' element={<Navigate to={RECOMMENDATIONS_ROUTE}/>} />
        </Routes>
    );
};

export default AppRouter;