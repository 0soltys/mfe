// @ts-nocheck
import React from "react";
import { Switch, Route, Router } from "react-router-dom";

import { StylesProvider, createGenerateClassName } from "@material-ui/core/styles";
import Pricing from "./components/Pricing";
import Landing from "./components/Landing";

const gereateClassName = createGenerateClassName({ productionPrefix: "ma" });
const App = ({ history }) => {
    return (
        <div>
            <StylesProvider generateClassName={gereateClassName}>
                <Router history={history}>
                    <Switch>
                        <Route exact path={"/pricing"} component={Pricing} />
                        <Route path={"/"} component={Landing} />
                    </Switch>
                </Router>
            </StylesProvider>
        </div>
    );
};
export default App;
