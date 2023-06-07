import { colors } from "constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	Button: {
		width: 50,
		height: 50,
		borderWidth: 2,
		borderColor: colors.black,
		borderRadius: 50,
		backgroundColor: colors.secondaryGreen,
		alignItems: "center",
		justifyContent: "center",
		marginTop: 5,
	},
});
