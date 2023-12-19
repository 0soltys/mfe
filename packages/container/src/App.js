// @ts-nocheck
import React, { lazy, Suspense, useState } from "react";
import Header from "./components/Header";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core/styles";
import { createBrowserHistory } from "history";
import { useEffect } from "react";

const MarketingAppLazy = lazy(() => import("./components/MarketingApp"));
const AuthAppLazy = lazy(() => import("./components/AuthApp"));
const DashboardAppLazy = lazy(() => import("./components/DashboardApp"));

const history = createBrowserHistory();

const gereateClassName = createGenerateClassName({ productionPrefix: "co" });

const App = () => {
    const [isSignedIn, setIsSignedIn] = useState(false);

    useEffect(() => {
        if (isSignedIn) {
            history.push("/dashboard");
        }
    }, [isSignedIn]);

    const handleSetIsSignIn = () => {
        console.log("🚀 ~ file: App.js:16 ~ handleSetIsSignIn ~ handleSetIsSignIn:");
        setIsSignedIn(true);
    };

    const handleOnSignOut = () => {
        setIsSignedIn(false);
    };

    return (
        <Router history={history}>
            <StylesProvider generateClassName={gereateClassName}>
                <div>
                    <Header isSignedIn={isSignedIn} onSignOut={handleOnSignOut} />
                    <Suspense fallback={<div>Loading...</div>}>
                        <Switch>
                            <Route path="/auth">
                                <AuthAppLazy onSignIn={handleSetIsSignIn} />
                            </Route>
                            <Route path="/dashboard">
                                {!isSignedIn && <Redirect to="/" />}
                                <DashboardAppLazy />
                            </Route>
                            <Route path="/" component={MarketingAppLazy} />
                        </Switch>
                    </Suspense>
                </div>
            </StylesProvider>
        </Router>
    );
};

export default App;
