import { colors } from "constants/colors";
import { Platform, StatusBar, StyleSheet } from "react-native";

export const HomeStyles = StyleSheet.create({
	Container: {
		flex: 1,
		backgroundColor: colors.primaryGreen,
		paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        paddingHorizontal: 15
	},
});
