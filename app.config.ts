import "dotenv/config";

export default {
	expo: {
		name: "Pallav",
		slug: "pallav",
		version: "1.0.0",
		orientation: "portrait",
		icon: "./assets/images/icon.png",
		scheme: "myapp",
		userInterfaceStyle: "automatic",
		splash: {
			image: "./assets/images/splash.png",
			resizeMode: "contain",
			backgroundColor: "#EBF0DE",
		},
		assetBundlePatterns: ["**/*"],
		ios: {
			supportsTablet: true,
		},
		android: {
			adaptiveIcon: {
				foregroundImage: "./assets/images/adaptive-icon.png",
				backgroundColor: "#EBF0DE",
			},
			softwareKeyboardLayoutMode: "pan",
			package: "tech.ankan.pallav",
		},
		web: {
			bundler: "metro",
			favicon: "./assets/images/favicon.png",
		},
		extra: {
			eas: {
				projectId: process.env["EAS_PROJECT_ID"],
			},
			api_endpoint: process.env["API_ENDPOINT"],
		},
	},
};
