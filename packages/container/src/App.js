// @ts-nocheck
import React, { lazy, Suspense } from "react";
import Header from "./components/Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core/styles";

const MarketingAppLazy = lazy(() => import("./components/MarketingApp"));
const AuthAppLazy = lazy(() => import("./components/AuthApp"));
const gereateClassName = createGenerateClassName({ productionPrefix: "co" });

const App = () => {
    return (
        <BrowserRouter>
            <StylesProvider generateClassName={gereateClassName}>
                <div>
                    <Header />
                    <Suspense fallback={<div>Loading...</div>}>
                        <Switch>
                            <Route path="/auth" component={AuthAppLazy} />
                            <Route path="/" component={MarketingAppLazy} />
                        </Switch>
                    </Suspense>
                </div>
            </StylesProvider>
        </BrowserRouter>
    );
};

export default App;
