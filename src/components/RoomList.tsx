import { collection, query } from "firebase/firestore";
import { useFirestoreData } from "../hooks/useFirestoreData";
import { ECollections, TFirebaseRooms, db } from "../firebase/db";
import { AddRoomModal } from "./AddRoomModal";
import { RoomCard } from "./RoomCard";

export const RoomList = () => {
	const [data] = useFirestoreData(query(collection(db, ECollections.Rooms)));
	return (
		<div className="h-full">
			<div className="flex items-center justify-between">
				<h1 className="font-bold text-cl">Rooms</h1>
				<AddRoomModal></AddRoomModal>
			</div>
			<div className="w-full overflow-auto">
				<div className="flex flex-col gap-2">
					{data.map((e, i) => {
						return (
							<RoomCard
								key={`UserCard-${i}`}
								room={e as TFirebaseRooms}
							></RoomCard>
						);
					})}
				</div>
			</div>
		</div>
	);
};
