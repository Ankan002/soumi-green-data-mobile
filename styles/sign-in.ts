import { Platform, StatusBar, StyleSheet } from "react-native";

export const SignInStyles = StyleSheet.create({
	screen: {
		flex: 1,
		backgroundColor: "#EBF0DE",
		paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
		alignItems: "center",
		paddingHorizontal: 15,
	},
	container: {
		flex: 1,
		marginVertical: 20,
		alignItems: "center",
		backgroundColor: "#C7F44D",
		borderWidth: 2,
		borderRadius: 40,
		borderColor: "#000",
		width: Platform.OS === "android" ? "100%" : "95%",
	},
});
