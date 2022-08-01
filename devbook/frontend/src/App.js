import { Routes, Route } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/login/LoginPage";
import ProfilePage from "./pages/profile/ProfilePage";

function App() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<HomePage />} exact />
				<Route path="/login" element={<LoginPage />} exact />
				<Route path="/profile" element={<ProfilePage />} exact />
			</Routes>
		</div>
	);
}

export default App;
