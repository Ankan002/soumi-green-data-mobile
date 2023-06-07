import { Text } from "react-native";
import { styles } from "./styles";

interface Props {
	text: string;
	fontSize: number;
}

const ProfileText = (props: Props) => {
	const { text, fontSize } = props;

	return (
		<Text
			style={[
				styles.Text,
				{
					fontSize,
				},
			]}
		>
			{text}
		</Text>
	);
};

export default ProfileText;
