import { collection, query } from "firebase/firestore";
import { useFirestoreData } from "../hooks/useFirestoreData";
import { ECollections, TFirebaseUser, db } from "../firebase/db";
import { UserCard } from "./UserCard";

export const UserList = () => {
	const [data] = useFirestoreData(query(collection(db, ECollections.Users)));
	return (
		<div className="h-full">
			<h1 className="font-bold text-cl">Users</h1>
			<div className="w-full overflow-auto">
				<div className="flex flex-col gap-2">
					{data.map((e, i) => {
						return (
							<UserCard
								key={`UserCard-${i}`}
								user={e as TFirebaseUser}
							></UserCard>
						);
					})}
				</div>
			</div>
		</div>
	);
};
