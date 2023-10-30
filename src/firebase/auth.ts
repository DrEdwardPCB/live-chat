import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { fire } from "./firebaseConfig";
import { createUserProfile, getUserByEmail } from "./db";

export const auth = getAuth(fire);
export const googleSignIn = () => {
	const provider = new GoogleAuthProvider();
	signInWithPopup(auth, provider).then(async (result) => {
		const profile = await getUserByEmail(
			result!.user!.email as NonNullable<string>
		);
		if (!profile) {
			await createUserProfile(
				result.user.email as NonNullable<string>,
				result.user.displayName as NonNullable<string>
			);
		}
	});
};
export const signOut = () => {
	auth.signOut()
		.then((resp) => console.log(resp))
		.catch((err) => console.error(err));
};
