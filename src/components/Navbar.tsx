// import { useState } from "react";
import { useEffect } from "react";
import GoogleSignin from "../assets/btn_google_signin_dark_normal_web.png";
import { auth, googleSignIn, signOut } from "../firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Outlet, useNavigate } from "react-router-dom";

const NavBar = () => {
	const [user] = useAuthState(auth);
	const googleSignInFn = () => {
		googleSignIn();
	};
	const signOutFn = () => {
		signOut();
	};
	const navigate = useNavigate();
	useEffect(() => {
		if (!user) {
			navigate("/");
		}
	}, [user]);
	return (
		<>
			<nav className="fixed top-0 flex items-center justify-between w-full h-10 px-10 bg-slate-700">
				<h1
					className="cursor-pointer"
					onClick={() => {
						if (user) {
							navigate("/rooms");
						} else {
							navigate("/");
						}
					}}
				>
					React Chat
				</h1>
				{user ? (
					<button
						onClick={signOutFn}
						className="sign-out"
						type="button"
					>
						Sign Out
					</button>
				) : (
					<button
						className="sign-in"
						onClick={googleSignInFn}
						type="button"
					>
						<img src={GoogleSignin} alt="sign in with google" />
					</button>
				)}
			</nav>
			<div className="h-full mt-10">
				<Outlet></Outlet>
			</div>
		</>
	);
};
export default NavBar;
