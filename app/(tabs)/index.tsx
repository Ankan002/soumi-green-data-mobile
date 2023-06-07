import { MainHeader } from "components/elements";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import { HomeStyles } from "styles/home";

const HomeScreen = () => {
	return (
		<SafeAreaView style={HomeStyles.Container}>
			<MainHeader title="Feed" />
			<StatusBar style="dark" />
		</SafeAreaView>
	);
};

export default HomeScreen;
