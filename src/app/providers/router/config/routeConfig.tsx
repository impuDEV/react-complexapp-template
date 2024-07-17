import {AppRoutes, getRouteAbout, getRouteForbidden, getRouteMain} from "@/shared/const/router";
import {AppRoutesProps} from "@/shared/types/router";
import {MainPage} from "@/pages/MainPage";
import {AboutPage} from "@/pages/AboutPage";
import {ForbiddenPage} from "@/pages/ForbiddenPage";
import {NotFoundPage} from "@/pages/NotFoundPage";

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: getRouteMain(),
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: getRouteAbout(),
        element: <AboutPage />,
    },

    [AppRoutes.FORBIDDEN]: {
        path: getRouteForbidden(),
        element: <ForbiddenPage />,
    },

    // last
    [AppRoutes.NOT_FOUND]: {
        path: '*',
        element: <NotFoundPage />,
    }

}