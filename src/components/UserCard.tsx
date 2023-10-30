import dayjs from "dayjs";
import { TFirebaseUser } from "../firebase/db";

export interface IUserCardProps {
	user: TFirebaseUser;
}
export const UserCard = ({
	user: { email, createdAt, displayName },
}: IUserCardProps) => {
	return (
		<div className="p-4 rounded bg-slate-600">
			<p className="font-bold">{displayName}</p>
			<p>{email}</p>
			<p className="tex-xs">
				{dayjs(createdAt).format("YYYY-MM-DD HH:mm:ss")}
			</p>
		</div>
	);
};
