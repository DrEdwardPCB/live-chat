import { RoomList } from "../components/RoomList";
import { UserList } from "../components/UserList";
export const RoomsPage = () => {
	return (
		<div className="flex flex-wrap gap-2 p-2 bg-slate-800">
			<div className="flex-1 min-w-[540px]">
				<RoomList></RoomList>
			</div>
			<div className=" min-w-[540px]">
				<UserList />
			</div>
		</div>
	);
};
