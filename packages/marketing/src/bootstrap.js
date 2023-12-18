import React from "react";
import ReactDOM from "react-dom";
import { createMemoryHistory, createBrowserHistory } from "history";
import App from "./App";

export const mount = (el, { onNavigate, defaultHistory }) => {
    // defaultHistory need for backward compatibility to use MarketingApp in isolation (for ex. developing)
    const history = defaultHistory ?? createMemoryHistory();

    if (onNavigate) {
        history.listen(onNavigate);
    }

    ReactDOM.render(<App history={history} />, el);

    return {
        onParentNavigate: ({ pathname: nextPathname }) => {
            const { pathname } = history.location;

            if (pathname !== nextPathname) {
                history.push(nextPathname);
            }
        }
    };
};

if (process.env.NODE_ENV === "development") {
    const devRoot = document.querySelector("#_marketing-dev-root");

    if (devRoot) {
        // @ts-ignore
        mount(devRoot, { defaultHistory: createBrowserHistory() });
    }
}
