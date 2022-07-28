import "./login.scss";
import LoginForm from "../../components/login/LoginForm";
import Footer from "../../components/login/Footer";

const loginInfos = {
	email: "",
	password: "",
};
export default function Login() {
	return (
		<div className="login">
			<div className="login_wrapper">
				<LoginForm />
				<div className="register"></div>
				<Footer />
			</div>
		</div>
	);
}
