import { Platform, StatusBar, StyleSheet } from "react-native";

export const SignUpStyles = StyleSheet.create({
	Screen: {
		flex: 1,
		paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
		backgroundColor: "#EBF0DE",
		paddingHorizontal: 15,
		alignItems: "center",
	},
	Container: {
		flex: 1,
		marginVertical: 20,
		alignItems: "center",
		backgroundColor: "#C7F44D",
		borderWidth: 2,
		borderRadius: 40,
		borderColor: "#000",
		width: Platform.OS === "android" ? "100%" : "95%",
	},
	NavigationButtonContainer: {
		width: Platform.OS === "android" ? "100%" : "95%",
	}
});
