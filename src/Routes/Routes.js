import AddStatuse from "../AddStatus/AddStatuse";
import Main from "../Layout/Main";
import About from "../Pages/About/About";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import ByOneShow from "../ShowAllStatus/ByOneShow";
import ShowAll from "../ShowAllStatus/ShowAll";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: '/',
        element:<Main></Main>,
        children: [

            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/login',
                element:<Login></Login>
            },
            {
                path: '/signUp',
                element:<SignUp></SignUp>
            },
            {
                path: '/statuse',
                element:<AddStatuse></AddStatuse>
            },
            {
                path: '/show',
                element:<ByOneShow></ByOneShow>
            },
            {
                path: '/show',
                element:<ByOneShow></ByOneShow>
            },
            {
                path: '/about',
                element:<About></About>
            },
        
        
        ]}])
            export default router ;