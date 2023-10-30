import { DocumentData, Query, getDocs, onSnapshot } from "firebase/firestore";
import { uniqBy } from "lodash";
import { useEffect, useState } from "react";

export const useFirestoreData = <T>(
	query: Query<DocumentData, DocumentData>
) => {
	const [data, setData] = useState<T[]>([]);
	useEffect(() => {
		const colRef = query;
		//real time update
		async function getInitialDoc() {
			const docSnap = await getDocs(colRef);
			docSnap.docs.forEach((doc) => {
				setData((prev) =>
					uniqBy(
						[
							...prev,
							Object.assign({ id: doc.id }, doc.data()) as T,
						],
						"id"
					)
				);
				console.log("onsnapshot", doc.data());
			});
		}
		getInitialDoc();
		const unsub = onSnapshot(colRef, (snapshot) => {
			snapshot.docs.forEach((doc) => {
				setData((prev) =>
					uniqBy(
						[
							...prev,
							Object.assign({ id: doc.id }, doc.data()) as T,
						],
						"id"
					)
				);
				console.log("onsnapshot", doc.data());
			});
		});
		return () => {
			unsub();
		};
	}, []);
	return [data];
};
