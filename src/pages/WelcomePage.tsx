import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/auth";
import { useEffect } from "react";
export const WelcomePage = () => {
	const navigate = useNavigate();
	const [user] = useAuthState(auth);

	useEffect(() => {
		if (user) {
			navigate("/rooms");
		}
	}, [user]);

	return (
		<div className="flex flex-col items-center justify-center w-full h-full bg-slate-800">
			<h1>Welcome to Live Chat</h1>
			<h2>firebase powered chat platform</h2>
			<p>Created by Edward Wong</p>
		</div>
	);
};
