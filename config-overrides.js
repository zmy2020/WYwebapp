const {override,addWebpackAlias} = require('customize-cra')
const path = require('path')
module.exports = override(
    addWebpackAlias({
        ["@"]:path.resolve(__dirname,"./src"),
        ["@api"]:path.resolve(__dirname,"./src/api"),
        ["@application"]:path.resolve(__dirname,"src/application"),
        ["@assets"]:path.resolve(__dirname,"./src/assets"),
        ["@baseUI"]:path.resolve(__dirname,"./src/baseUI"),
        ["@components"]:path.resolve(__dirname,"./src/components"),
        ["@routes"]:path.resolve(__dirname,"./src/routes"),
        ["@store"]:path.resolve(__dirname,"./src/store"),
    }),
)