import { Platform, StatusBar, StyleSheet } from "react-native";

export const SignUpStyles = StyleSheet.create({
    Screen: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor: "#EBF0DE",
        paddingHorizontal: 15
    }
});
