import { Image, View } from "react-native";
import { styles } from "./styles";
import { dummyUser } from "constants/dummy-user";

const ProfileSection = () => {
	return (
		<View style={styles.ProfileContainer}>
			<Image
				source={{ uri: `https://api.dicebear.com/6.x/micah/png?seed=${dummyUser.email}` }}
				style={styles.ProfileImage}
			/>
		</View>
	);
};

export default ProfileSection;
