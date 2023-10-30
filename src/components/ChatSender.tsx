import { Button, TextField } from "@mui/material";
import { useState } from "react";

export interface IChatSenderProps {
	userId: string;
	roomId: string;
	onSendMessage: (userId: string, roomId: string, message: string) => void;
}
export const ChatSender = (props: IChatSenderProps) => {
	const { userId, roomId, onSendMessage } = props;
	const [message, setMessage] = useState("");
	const handleSend = () => {
		if (message !== "") {
			onSendMessage(userId, roomId, message);
			setMessage("");
		}
	};
	return (
		<div className="flex gap-2 px-2 bg-slate-600">
			<TextField
				value={message}
				onChange={(e) => setMessage(e.target.value)}
				className="flex-1"
				placeholder="type sth here..."
			></TextField>
			<Button
				disabled={message === ""}
				variant="contained"
				onClick={() => handleSend()}
			>
				send
			</Button>
		</div>
	);
};
