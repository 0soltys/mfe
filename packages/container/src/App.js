// @ts-nocheck
import React, { lazy, Suspense, useState } from "react";
import Header from "./components/Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core/styles";

const MarketingAppLazy = lazy(() => import("./components/MarketingApp"));
const AuthAppLazy = lazy(() => import("./components/AuthApp"));
const gereateClassName = createGenerateClassName({ productionPrefix: "co" });

const App = () => {
    const [isSignedIn, setIsSignedIn] = useState(false);
    const handleSetIsSignIn = () => {
        console.log("🚀 ~ file: App.js:16 ~ handleSetIsSignIn ~ handleSetIsSignIn:");
        setIsSignedIn(true);
    };

    const handleOnSignOut = () => {
        setIsSignedIn(false);
    };

    return (
        <BrowserRouter>
            <StylesProvider generateClassName={gereateClassName}>
                <div>
                    <Header isSignedIn={isSignedIn} onSignOut={handleOnSignOut} />
                    <Suspense fallback={<div>Loading...</div>}>
                        <Switch>
                            <Route path="/auth">
                                <AuthAppLazy onSignIn={handleSetIsSignIn} />
                            </Route>
                            <Route path="/" component={MarketingAppLazy} />
                        </Switch>
                    </Suspense>
                </div>
            </StylesProvider>
        </BrowserRouter>
    );
};

export default App;
