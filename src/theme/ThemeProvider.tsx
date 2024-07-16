import React, {ReactNode, useMemo, useState} from 'react';
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from './ThemeContext'

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT

interface ThemeProviderProps {
    initialTheme?: Theme
    children: ReactNode
}

const ThemeProvider = (props: ThemeProviderProps) => {
    const {
        initialTheme,
        children
    } = props

    const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme)

    const defaultPros = useMemo(() => ({
        theme,
        setTheme
    }), [theme])

    return (
        <ThemeContext.Provider value={defaultPros}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;