import { cleanEnv, str } from "envalid";
export const env = cleanEnv(import.meta.env, {
	VITE_NODE_ENV: str(),
	VITE_FIRE_API_KEY: str(),
	VITE_FIRE_AUTH_DOMAIN: str(),
	VITE_FIRE_PROJECT_ID: str(),
	VITE_FIRE_STORAGE_BUCKET: str(),
	VITE_FIRE_MESSAGE_SENDER_ID: str(),
	VITE_FIRE_APP_ID: str(),
	VITE_FIRE_MEASUREMENT_ID: str(),
});
