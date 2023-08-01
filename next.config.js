const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    // loader: "imgix",
    // path: "/assets/images/",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    contentSecurityPolicy: ``,
  },
  output: "export",
  // basePath: '/docs',
};
