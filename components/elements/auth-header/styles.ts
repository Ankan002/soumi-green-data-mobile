import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	HeaderContainer: {
		marginTop: 10,
		alignItems: "center",
		paddingHorizontal: 10,
	},
	HeaderImage: {
		width: 100,
		height: 100,
		resizeMode: "contain",
	},
    TitleText: {
        marginTop: 5,
        fontSize: 30,
        fontWeight: "600",
        letterSpacing: 5,
        fontFamily: "SecularOne_400Regular",
        textAlign: "center"
    }
});
