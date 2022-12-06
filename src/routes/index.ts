import { Fragment } from "react";
import HomePage from "../pages/Home";
import Login from "../pages/Login";
import Profile from "../pages/Profile";

const publicRoutes = [
    {path: 'login', component: Login, layout: Fragment}
]

const privateRoutes = [
    {path: '/profile', component: Profile, role: ['Admin']},
    {path: '/', component: HomePage, role: ['Admin', 'User']},
]

export {publicRoutes,privateRoutes}