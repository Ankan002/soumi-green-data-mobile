module.exports = function (api) {
	api.cache(true);
	return {
		presets: ["babel-preset-expo"],
		plugins: [
			require.resolve("expo-router/babel"),
			[
				require.resolve("babel-plugin-module-resolver"),
				{
					alias: {
						styles: "./styles",
						assets: "./assets",
						components: "./components",
						theme: "./theme",
						constants: "./constants",
						atoms: "./atoms",
						helpers: "./helpers",
						types: "./types",
					},
				},
			],
		],
	};
};
