import {lazy} from "react"

export const AboutPageAsync = lazy(() => new Promise(resolve => {
    // @ts-ignore
    // TODO do not FORGET to cancel load delay
    setTimeout(() => resolve(import('./AboutPage')), 1500)
}))