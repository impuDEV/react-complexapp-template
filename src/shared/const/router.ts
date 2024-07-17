export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    FORBIDDEN = 'forbidden',

    // last
    NOT_FOUND = 'not_found'
}

export const getRouteMain = () => '/'
export const getRouteAbout = () => '/about'
export const getRouteForbidden = () => '/forbidden'
