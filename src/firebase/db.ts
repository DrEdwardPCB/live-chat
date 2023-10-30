import {
	addDoc,
	collection,
	doc,
	getDoc,
	getDocs,
	getFirestore,
	query,
	where,
} from "firebase/firestore";
import { fire } from "./firebaseConfig";
import dayjs from "dayjs";
import { isNil } from "lodash";

export enum ECollections {
	Users = "Users",
	Rooms = "Rooms",
	Chats = "Chats",
}
export type TFirebaseUser = {
	id: string;
	displayName: string;
	email: string;
	createdAt: string;
};
export type TFirebaseRooms = {
	id: string;
	displayName: string;
	createdAt: string;
};
export type TFirebaseChat = {
	roomId: string;
	userId: string;
	message: string;
	createdAt: string;
};
export const db = getFirestore(fire);

export const createUserProfile = async (email: string, displayName: string) => {
	return await addDoc(collection(db, ECollections.Users), {
		email,
		displayName,
		createdAt: dayjs().toISOString(),
	});
};
export const createRoom = async (displayName: string) => {
	return await addDoc(collection(db, ECollections.Rooms), {
		displayName,
		createdAt: dayjs().toISOString(),
	});
};
export const sendMessage = async (
	userId: string,
	roomId: string,
	message: string
) => {
	return await addDoc(collection(db, ECollections.Chats), {
		roomId,
		userId,
		message,
		createdAt: dayjs().toISOString(),
	});
};

const userCache = new Map<string, TFirebaseUser>();

export const getUser = async (userId: string) => {
	if (userCache.has(userId)) {
		return userCache.get(userId);
	}
	const res = await getDoc(doc(db, ECollections.Users, userId));
	const data = res.data() as TFirebaseUser;
	if (isNil(data)) {
		return undefined;
	} else {
		userCache.set(userId, data);
		return userCache.get(userId);
	}
};
export const getUserByEmail = async (email: string) => {
	const res = await getDocs(
		query(collection(db, ECollections.Users), where("email", "==", email))
	);
	const userList: TFirebaseUser[] = [];
	res.forEach((e) =>
		userList.push(Object.assign({ id: e.id }, e.data()) as TFirebaseUser)
	);
	return userList[0];
};

const roomCache = new Map<string, TFirebaseRooms>();

export const getRoom = async (roomId: string) => {
	if (roomCache.has(roomId)) {
		return roomCache.get(roomId);
	}
	const res = await getDoc(doc(db, ECollections.Users, roomId));
	const data = res.data() as TFirebaseUser;
	if (isNil(data)) {
		return undefined;
	} else {
		roomCache.set(roomId, data);
		return roomCache.get(roomId);
	}
};
