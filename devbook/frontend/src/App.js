import { Routes, Route } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/home/HomePage";
import ActivatePage from "./pages/activate/ActivatePage";
import LoginPage from "./pages/login/LoginPage";
import ProfilePage from "./pages/profile/ProfilePage";
import LoggedInRoutes from "./routes/LoggedInRoutes";
import NotLoggedInRoutes from "./routes/NotLoggedInRoutes";
import RecoverPage from "./pages/recover/RecoverPage";

function App() {
	return (
		<div>
			<Routes>
				<Route element={<LoggedInRoutes />}>
					<Route path="/profile" element={<ProfilePage />} exact />
					<Route path="/" element={<HomePage />} exact />
					<Route path="/activate/:token" element={<ActivatePage />} exact />
				</Route>
				<Route element={<NotLoggedInRoutes />}>
					<Route path="/login" element={<LoginPage />} exact />
				</Route>
				<Route path="recover" element={<RecoverPage />} />
			</Routes>
		</div>
	);
}

export default App;
