import { atom } from "recoil";
import { User } from "types/models";

export const userAtom = atom<User>({
	key: "userAtom",
	default: {},
});
