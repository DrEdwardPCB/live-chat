import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	TextField,
} from "@mui/material";
import { useState } from "react";
import { createRoom } from "../firebase/db";

export const AddRoomModal = () => {
	const [open, setOpen] = useState(false);
	const [roomName, setRoomName] = useState("");
	const reset = () => {
		setRoomName("");
		setOpen(false);
	};
	return (
		<>
			<Button
				onClick={() => {
					setOpen(true);
				}}
			>
				Add Room
			</Button>
			<Dialog open={open} onClose={() => reset()}>
				<DialogTitle>Add new Room</DialogTitle>
				<DialogContent>
					<TextField
						label="Room display name"
						placeholder="Any name will be ok..."
						onChange={(e) => {
							setRoomName(e.target.value);
						}}
					></TextField>
				</DialogContent>
				<DialogActions>
					<Button
						onClick={() => {
							reset();
						}}
					>
						cancel
					</Button>
					<Button
						onClick={async () => {
							await createRoom(roomName);
							reset();
						}}
					>
						add
					</Button>
				</DialogActions>
			</Dialog>
		</>
	);
};
