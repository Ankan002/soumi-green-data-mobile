import { colors } from "constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	Container: {
		flex: 1,
		width: "100%",
		backgroundColor: colors.tertiaryGreen,
		marginTop: 10,
		borderRadius: 40,
		paddingHorizontal: 20,
		paddingVertical: 5,
	},
	Title: {
		marginTop: 10,
		fontSize: 25,
		letterSpacing: 3,
		fontFamily: "Quicksand_600SemiBold",
	},
	InputContainer: {
		flex: 1,
		width: "100%",
	},
});
