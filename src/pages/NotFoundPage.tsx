import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const NotFoundPage = () => {
	const navigate = useNavigate();
	return (
		<div className="flex items-center justify-center">
			<h1>404</h1>
			<h2>The page you requested is not found</h2>
			<Button
				onClick={() => {
					navigate("/");
				}}
			>
				press to go back to main page
			</Button>
		</div>
	);
};
