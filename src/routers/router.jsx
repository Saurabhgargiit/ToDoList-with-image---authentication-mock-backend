import { Route, Routes, Navigate } from 'react-router-dom';
import HomeLayout from '../container/HomeLayout/HomeLayout';

// Define a simple route configuration
const routeConfig = [
    { path: '/home', element: <HomeLayout /> },
    { path: '*', element: <Navigate to='/home' /> },
];

const Routers = () => {
    return (
        <Routes>
            {routeConfig.map((route) => {
                return <Route path={route.path} element={route.element} key={route.path} />;
            })}
        </Routes>
    );
};

export default Routers;
