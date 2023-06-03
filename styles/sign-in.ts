import { Platform, StatusBar, StyleSheet } from "react-native";

export const SignInStyles = StyleSheet.create({
	screen: {
		flex: 1,
		backgroundColor: "#EBF0DE",
		paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
		alignItems: "center",
	},
});
