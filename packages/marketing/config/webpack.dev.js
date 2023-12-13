const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MuduleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const commonConfig = require("./webpack.common");
const packageJson = require("../package.json");

const devConfig = {
    mode: "development",
    devServer: {
        port: 8081,
        historyApiFallback: {
            index: "index.html"
        }
    },
    plugins: [
        new MuduleFederationPlugin({
            name: "marketing",
            filename: "remoteEntry.js",
            exposes: { "./MarketingApp": "./src/bootstrap" },
            shared: packageJson.dependencies
        })
    ]
};

// @ts-ignore
module.exports = merge(commonConfig, devConfig);
