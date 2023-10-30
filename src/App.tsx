import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar";
import { NotFoundPage } from "./pages/NotFoundPage";
import { WelcomePage } from "./pages/WelcomePage";
import { RoomsPage } from "./pages/RoomsPage";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { SpecificRoomPage } from "./pages/SpecificRoomPage";

const darkTheme = createTheme({
	palette: {
		mode: "dark",
	},
});

function App() {
	return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<NavBar></NavBar>}>
						<Route
							path="/"
							element={<WelcomePage></WelcomePage>}
						></Route>
						<Route
							path="/rooms/:id"
							element={<SpecificRoomPage></SpecificRoomPage>}
						></Route>
						<Route
							path="/rooms"
							element={<RoomsPage></RoomsPage>}
						></Route>
						<Route
							path="*"
							element={<NotFoundPage></NotFoundPage>}
						></Route>
					</Route>
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
