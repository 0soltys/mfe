const { merge } = require("webpack-merge");

const MuduleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const commonConfig = require("./webpack.common");
const packageJson = require("../package.json");

const prodConfig = {
    mode: "production",
    output: {
        filename: "[name].[contenthash].js",
        publicPath: "/auth/latest/"
    },
    plugins: [
        new MuduleFederationPlugin({
            name: "auth",
            filename: "remoteEntry.js",
            exposes: { "./AuthApp": "./src/bootstrap" },
            shared: packageJson.dependencies
        })
    ]
};

// @ts-ignore
module.exports = merge(commonConfig, prodConfig);
