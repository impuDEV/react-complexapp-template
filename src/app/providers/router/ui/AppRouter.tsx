import {memo, Suspense, useCallback} from "react";
import {AppRoutesProps} from "@/shared/types/router";
import {Route, Routes} from "react-router-dom";
import {RequireAuth} from "@/app/providers/router/ui/RequireAuth";
import {routeConfig} from "@/app/providers/router/config/routeConfig";

const AppRouter = () => {
    const renderWithWrapper = useCallback((route: AppRoutesProps) => {
        const element = (
            <Suspense fallback="Loading...">{route.element}</Suspense>
        )

        return (
            <Route
                key={route.path}
                path={route.path}
                element={
                    route.authOnly ? <RequireAuth>{element}</RequireAuth> : element
                }
            />
        )
    }, [])

    return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
}

export default memo(AppRouter)