import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { env } from "../config/env";

const firebaseConfig = {
	apiKey: env.VITE_FIRE_API_KEY,
	authDomain: env.VITE_FIRE_AUTH_DOMAIN,
	projectId: env.VITE_FIRE_PROJECT_ID,
	storageBucket: env.VITE_FIRE_STORAGE_BUCKET,
	messagingSenderId: env.VITE_FIRE_MESSAGE_SENDER_ID,
	appId: env.VITE_FIRE_APP_ID,
	measurementId: env.VITE_FIRE_MEASUREMENT_ID,
};
export const fire = initializeApp(firebaseConfig);
export const analytics = getAnalytics(fire);
