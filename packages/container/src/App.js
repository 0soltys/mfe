// @ts-nocheck
import React from "react";
import MarketingApp from "./components/MarketingApp";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core/styles";

const gereateClassName = createGenerateClassName({ productionPrefix: "co" });

const App = () => {
    return (
        <BrowserRouter>
            <StylesProvider generateClassName={gereateClassName}>
                <div>
                    <Header />
                    <MarketingApp />
                </div>
            </StylesProvider>
        </BrowserRouter>
    );
};

export default App;
