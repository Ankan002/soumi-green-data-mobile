import { Image, View } from "react-native";
import { styles } from "./styles";
import { dummyUser } from "constants/dummy-user";
import { ProfileText } from "../elements";

const ProfileSection = () => {
	return (
		<View style={styles.ProfileContainer}>
			<Image
				source={{ uri: `https://api.dicebear.com/6.x/micah/png?seed=${dummyUser.email}` }}
				style={styles.ProfileImage}
			/>
            <View style={styles.ProfileTextContainer}>
                <ProfileText text={dummyUser.name} fontSize={19} />
                <ProfileText text={dummyUser.email} fontSize={12} />
            </View>
		</View>
	);
};

export default ProfileSection;
