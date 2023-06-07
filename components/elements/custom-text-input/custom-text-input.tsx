import { Text, TextInput, View } from "react-native";
import { styles } from "./styles";
import { colors } from "constants/colors";

interface Props {
	title: string;
	value: string;
	onChangeText: (text: string) => void;
	keyboardType: "default" | "email-address";
}

const CustomTextInput = (props: Props) => {
	const { title, value, onChangeText, keyboardType } = props;

	return (
		<View style={styles.Container}>
			<Text style={styles.TitleText}>{title}</Text>
			<TextInput
				style={styles.TextInput}
				value={value}
				onChangeText={onChangeText}
				keyboardType={keyboardType}
				cursorColor={colors.black}
			/>
		</View>
	);
};

export default CustomTextInput;
