import { colors } from "constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	Button: {
		width: "100%",
		backgroundColor: colors.primaryRed,
		justifyContent: "center",
		alignItems: "center",
		paddingHorizontal: 10,
		paddingVertical: 1,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: colors.black,
        marginTop: 20,
	},
    ButtonText: {
        fontSize: 19,
        fontFamily: "Quicksand_600SemiBold",

    }
});
