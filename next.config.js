const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin();

/** @type {import("next").NextConfig} */

const nextConfig = {
	reactStrictMode: true,
	poweredByHeader: false,
	trailingSlash: false,
	compiler: {
		styledComponents: true,
	},
	experimental: {
		turbo: {
			resolveAlias: {
				canvas: "./empty-module.ts",
			},
		},
	},
	output: "standalone",
	webpack: config => {
		config.resolve.alias.canvas = false;
		config.resolve.alias.encoding = false;
		return config;
	},
};

module.exports = withNextIntl(nextConfig);
