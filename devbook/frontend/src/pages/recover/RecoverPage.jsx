import "./RecoverPage.scss";
import loginImages from "../../constants/loginImages";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import SendRecoverEmail from "./SendRecoverEmail";
import CodeVerification from "./CodeVerification";

export default function RecoverPage() {
	const { user } = useSelector((state) => ({ ...state }));
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [visible, setVisible] = useState(1);
	const [email, setEmail] = useState("");
	const [code, setCode] = useState("");
	const [error, setError] = useState("");
	const logout = () => {
		Cookies.set("user", "");
		dispatch({
			type: "LOGOUT",
		});
		navigate("/login");
	};
	return (
		<div className="recover flex__column__center">
			<div className="recover__header flex__row">
				<Link to="/">
					<img src={loginImages.logo_2} alt="" />
				</Link>
				{user ? (
					<button
						className="button-purple"
						onClick={() => {
							logout();
						}}
					>
						LOGOUT
					</button>
				) : (
					<button
						className="button-purple"
						onClick={() => {
							navigate("/login");
						}}
					>
						LOGIN
					</button>
				)}
			</div>
			{visible === 0 && (
				<SendRecoverEmail email={email} setEmail={setEmail} error={error} />
			)}
			{visible === 1 && (
				<CodeVerification
					user={user}
					code={code}
					setCode={setCode}
					error={error}
				/>
			)}
		</div>
	);
}
