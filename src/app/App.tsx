import React, {Suspense} from 'react';
import './styles/index.scss'
import {useTheme} from "@/shared/lib/hooks/useTheme/useTheme";
import {classNames} from "@/shared/lib/classNames/classNames";
import {AppRouter} from "./providers/router";
import {Navbar} from "@/widgets/Navbar";

function App() {
    const {theme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar/>
            <Suspense fallback={<div>Loading...</div>}>
                <div className="content-page">
                    <AppRouter/>
                </div>
            </Suspense>
        </div>
    );
};

export default App;