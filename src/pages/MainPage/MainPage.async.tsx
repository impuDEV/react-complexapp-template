import {lazy} from "react"

export const MainPageAsync = lazy(() => new Promise(resolve => {
    // @ts-ignore
    // TODO do not FORGET to cancel load delay
    setTimeout(() => resolve(import('./MainPage')), 1500)
}))