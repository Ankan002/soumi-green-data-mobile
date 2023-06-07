import { colors } from "constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    ProfileContainer: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
    },
    ProfileImage: {
        width: 100,
        height: 100,
        resizeMode: "contain",
        borderWidth: 2,
        borderColor: colors.black,
        borderRadius: 50,
        backgroundColor: colors.tertiaryGreen
    },
    ProfileTextContainer: {
        flex: 1,
        justifyContent: "center",
        marginLeft: 10
    }
})
