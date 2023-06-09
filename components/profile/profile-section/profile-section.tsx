import { Image, View } from "react-native";
import { styles } from "./styles";
import { ProfileText } from "../elements";
import { useRecoilValue } from "recoil";
import { User } from "types/models";
import { userAtom } from "atoms";

const ProfileSection = () => {
	const user = useRecoilValue<User>(userAtom);

	return (
		<View style={styles.ProfileContainer}>
			{user.email && user.name && (
				<>
					<Image
						source={{ uri: `https://api.dicebear.com/6.x/micah/png?seed=${user.email}` }}
						style={styles.ProfileImage}
					/>
					<View style={styles.ProfileTextContainer}>
						<ProfileText text={user.name} fontSize={19} />
						<ProfileText text={user.email} fontSize={12} />
					</View>
				</>
			)}
		</View>
	);
};

export default ProfileSection;
