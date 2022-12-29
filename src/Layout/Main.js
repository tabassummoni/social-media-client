import React from 'react';
import { Outlet } from 'react-router-dom';
import Footers from '../Pages/Footer/Footers';
import Header from '../Pages/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
           
        </div>
    );
};

export default Main;