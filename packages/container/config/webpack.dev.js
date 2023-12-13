const { merge } = require("webpack-merge");

const MuduleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packageJson = require("../package.json");
const commonConfig = require("./webpack.common");

const devConfig = {
    mode: "development",
    devServer: {
        port: 8080,
        historyApiFallback: {
            index: "index.html"
        }
    },
    plugins: [
        new MuduleFederationPlugin({
            name: "container",
            remotes: {
                marketing: "marketing@http://localhost:8081/remoteEntry.js"
            },
            shared: packageJson.dependencies
        })
    ]
};

// @ts-ignore
module.exports = merge(commonConfig, devConfig);
