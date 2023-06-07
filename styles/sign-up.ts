import { colors } from "constants/colors";
import { Platform, StatusBar, StyleSheet } from "react-native";

export const SignUpStyles = StyleSheet.create({
	Screen: {
		flex: 1,
		paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
		backgroundColor: colors.primaryGreen,
		paddingHorizontal: 15,
		alignItems: "center",
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
	NavigationButtonContainer: {
		width: Platform.OS === "android" ? "100%" : "95%",
	}
});
