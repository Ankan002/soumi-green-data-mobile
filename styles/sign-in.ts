import { colors } from "constants/colors";
import { Platform, StatusBar, StyleSheet } from "react-native";

export const SignInStyles = StyleSheet.create({
	Screen: {
		flex: 1,
		backgroundColor: colors.primaryGreen,
		paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
		alignItems: "center",
		paddingHorizontal: 15,
	},
	Container: {
		flex: 1,
		marginVertical: 20,
		alignItems: "center",
		backgroundColor: colors.secondaryGreen,
		borderWidth: 2,
		borderRadius: 40,
		borderColor: colors.black,
		width: Platform.OS === "android" ? "100%" : "95%",
	},
});
