import { colors } from "constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	LoginButton: {
		width: "100%",
		paddingHorizontal: 18,
		paddingVertical: 16,
		backgroundColor: colors.black,
		marginBottom: 10,
		borderRadius: 50,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	LoginText: {
		color: colors.white,
		fontSize: 16,
		letterSpacing: 2,
		fontFamily: "Quicksand_600SemiBold",
	},
});
