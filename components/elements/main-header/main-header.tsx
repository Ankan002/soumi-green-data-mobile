import { Text, View } from "react-native";
import { styles } from "./styles";

interface Props {
	title: string;
}

const MainHeader = (props: Props) => {
	const { title } = props;

	return (
		<View style={styles.HeaderContainer}>
			<Text style={styles.HeaderText}>{title}</Text>
		</View>
	);
};

export default MainHeader;
