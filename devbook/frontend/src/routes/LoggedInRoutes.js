import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import LoginPage from "../pages/login/LoginPage";

export default function LoggedInRoutes() {
	const { user } = useSelector((state) => ({ ...state }));
	return user ? <Outlet /> : <LoginPage />;
}
