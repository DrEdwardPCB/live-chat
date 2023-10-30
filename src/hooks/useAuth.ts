import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/auth";
import { useEffect, useState } from "react";
import { getUserByEmail } from "../firebase/db";

export const useAuth = () => {
	const [user] = useAuthState(auth);
	const [id, setId] = useState("");
	useEffect(() => {
		async function getLoggedInUserProfile(email: string) {
			const user = await getUserByEmail(email);
			console.log(user);
			setId(user.id);
		}
		if (user) {
			getLoggedInUserProfile(user.email as NonNullable<string>);
		} else {
			setId("");
		}
	}, [user]);
	return { user, id };
};
