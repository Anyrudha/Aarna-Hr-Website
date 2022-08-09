require = require("esm")(module);
const { routes } = require("./src/router");

module.exports = {
    publicPath: '/Aarna-Hr-Website/'
        // pluginOptions: {
        //     sitemap: {
        //         pretty: true,
        //         baseURL: "",
        //         routes,
        //         urls: [],
        //         defaults: {
        //             lastmod: new Date().toISOString().slice(0, 10),
        //             changefreq: "daily",
        //             priority: 1.0,
        //         },
        //     },
        // },
};