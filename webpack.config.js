const path = require("path")

module.exports = {
    mode:         "production",
    entry:        "./src/index.js",
    optimization: {
        usedExports: true,
    },
    output:       {
        path:     path.resolve("dist"),
        filename: "ui.js",
    },
    module:       {
        rules: [
            {
                test:    /\.js?$/,
                exclude: /(node_modules)/,
                use:     "babel-loader",
            },
        ],
    },
    resolve:      {
        extensions: [".js", ".vue"],
    },
}
