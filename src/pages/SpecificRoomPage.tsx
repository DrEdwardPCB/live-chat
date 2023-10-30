import { useParams } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { ChatRoom } from "../components/ChatRoom";
import { FullPageLoading } from "../components/fullpageLoading";

export const SpecificRoomPage = () => {
	const { id: roomId } = useParams();
	const { id: userId } = useAuth();
	if (roomId && userId) {
		return <ChatRoom roomId={roomId} userId={userId}></ChatRoom>;
	} else {
		return <FullPageLoading></FullPageLoading>;
	}
};
