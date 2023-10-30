import { useNavigate } from "react-router-dom";
import { TFirebaseRooms } from "../firebase/db";
import dayjs from "dayjs";

export interface IUserCardProps {
	room: TFirebaseRooms;
}
export const RoomCard = ({
	room: { id, createdAt, displayName },
}: IUserCardProps) => {
	const navigate = useNavigate();
	return (
		<div
			className="p-4 rounded cursor-pointer bg-slate-600 hover:opacity-50"
			onClick={() => {
				navigate(`/rooms/${id}`);
			}}
		>
			<p className="font-bold">{displayName}</p>
			<p className="tex-xs">
				{dayjs(createdAt).format("YYYY-MM-DD HH:mm:ss")}
			</p>
		</div>
	);
};
