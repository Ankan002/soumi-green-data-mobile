import { View, Image, Text } from "react-native";
import { styles } from "./styles";

const authLogo = require("assets/images/green-data-logo.png");

const AuthHeader = () => {
	return (
		<View style={styles.HeaderContainer}>
			<Image source={authLogo} style={styles.HeaderImage} />
            <Text style={styles.TitleText}>
                Pallav
            </Text>
		</View>
	);
};

export default AuthHeader;
