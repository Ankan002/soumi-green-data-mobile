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
	CreateAccountButton: {
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
	CreateAccountText: {
		color: colors.white,
		fontSize: 16,
		letterSpacing: 2,
		fontFamily: "Manrope_500Medium",
	},
	CreateAccountLogoContainer: {
		width: 30,
		height: 30,
		borderRadius: 100,
		backgroundColor: colors.tertiaryGreen,
		alignItems: "center",
		justifyContent: "center",
	},
});
