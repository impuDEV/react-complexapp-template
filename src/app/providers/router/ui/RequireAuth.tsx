import {ReactNode} from "react";
import {Navigate, useLocation} from "react-router-dom";
import {getRouteForbidden, getRouteMain} from "@/shared/const/router";

interface RequireAuthProps {
    children: ReactNode
}

export function RequireAuth({children}: RequireAuthProps) {
    const location = useLocation()

    const auth = true
    const hasRequiredRoles = false

    if (!auth) {
        return <Navigate to={getRouteMain()} state={{from: location}} replace />
    }

    if (!hasRequiredRoles) {
        return (
            <Navigate to={getRouteForbidden()} state={{from: location}} replace/>
        )
    }

    return children
}