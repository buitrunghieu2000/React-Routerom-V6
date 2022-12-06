import { Outlet, Navigate } from "react-router-dom"

export  const PrivateRoute = () => {
    const isAuth = {token: true}
    return (
        isAuth.token ? <Outlet/> : <Navigate to ='/login'/>
    )
}