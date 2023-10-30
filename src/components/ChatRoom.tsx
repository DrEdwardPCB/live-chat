import { collection, query, where } from "firebase/firestore";
import { ECollections, TFirebaseChat, db, sendMessage } from "../firebase/db";
import { useFirestoreData } from "../hooks/useFirestoreData";
import { ChatSender } from "./ChatSender";
import { useEffect, useRef } from "react";
import { ChatBubble } from "./ChatBubble";
import { orderBy } from "lodash";

export interface IChatRoomProps {
	roomId: string;
	userId: string;
}
export const ChatRoom = (props: IChatRoomProps) => {
	const { roomId, userId } = props;
	const [data] = useFirestoreData(
		query(collection(db, ECollections.Chats), where("roomId", "==", roomId))
	);
	const messagesEndRef = useRef<HTMLDivElement | null>(null);

	const scrollToBottom = () => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
	};
	useEffect(() => {
		scrollToBottom();
	}, [data]);
	return (
		<div className="flex flex-col flex-1 bg-slate-800">
			<div className="flex flex-col flex-1 overflow-y-auto min-h-[calc(100vh-56px-40px)] max-h-[calc(100vh-56px-40px)]">
				{orderBy(data, "createdAt").map((e, i) => {
					return (
						<ChatBubble
							key={`chatbubble-${i}`}
							chat={e as TFirebaseChat}
						></ChatBubble>
					);
				})}
				<div ref={messagesEndRef}></div>
			</div>
			<ChatSender
				roomId={roomId}
				userId={userId}
				onSendMessage={sendMessage}
			></ChatSender>
		</div>
	);
};
