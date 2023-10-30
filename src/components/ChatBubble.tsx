import dayjs from "dayjs";
import { TFirebaseChat, getUser } from "../firebase/db";
import { useAuth } from "../hooks/useAuth";
import { useEffect, useState } from "react";
import { useTimeout } from "usehooks-ts";
import { CircularProgress } from "@mui/material";

export interface IChatBubbleProps {
	chat: TFirebaseChat;
}
export const ChatBubble = ({
	chat: { userId, message, createdAt },
}: IChatBubbleProps) => {
	const { id } = useAuth();
	const [otherUserName, setOtherUserName] = useState("");
	const [loading, setLoading] = useState(true);
	useTimeout(() => {
		setLoading(false);
	}, 500);
	useEffect(() => {
		async function getOtherUserName() {
			const res = await getUser(id);
			console.log(res);
			setOtherUserName(res!.displayName);
		}
		if (id !== userId) {
			getOtherUserName();
		}
	}, [id, userId]);
	if (loading) {
		return (
			<div className="flex justify-center w-full p-2 h-fit">
				<CircularProgress></CircularProgress>
			</div>
		);
	}
	if (id === userId) {
		return (
			<div className="flex justify-end w-full p-2 h-fit">
				<div className="flex flex-col items-end p-2 bg-blue-500 rounded">
					<p>{message}</p>
					<p className="text-xs">
						{dayjs(createdAt).format("YYYY-MM-DD HH:mm:ss")}
					</p>
				</div>
			</div>
		);
	}
	return (
		<div className="flex justify-start w-full p-2 h-fit">
			<div className="flex flex-col items-start p-2 rounded bg-slate-500">
				<p className="font-bold">{otherUserName}</p>
				<p>{message}</p>
				<p className="text-xs">
					{dayjs(createdAt).format("YYYY-MM-DD HH:mm:ss")}
				</p>
			</div>
		</div>
	);
};
