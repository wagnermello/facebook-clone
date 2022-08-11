import "../home/HomePage.scss";
import "./ActivatePage.scss";

import Header from "../../components/header/Header";
import LeftHome from "../../components/home/LeftHome/LeftHome";
import MiddleHome from "../../components/home/MiddleHome/MiddleHome";
import RightHome from "../../components/home/RightHome/RightHome";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import ActivateForm from "./ActivateForm";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

export default function ActivatePage() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { user } = useSelector((user) => ({ ...user, verified: true }));
	const [success, setSuccess] = useState("");
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(true);
	const { token } = useParams();
	useEffect(() => {
		activateAccount();
	}, []);
	const activateAccount = async () => {
		try {
			setLoading(true);
			const { data } = await axios.post(
				`${process.env.REACT_APP_BACKEND_URL}/activate`,
				{ token },
				{
					headers: {
						Authorization: `Bearer ${user.token}`,
					},
				}
			);
			setSuccess(data.message);
			Cookies.set("user", JSON.stringify({ ...user, verified: true }));
			dispatch({
				type: "VERIFY",
				payload: true,
			});
			// setTimeout(() => {
			// 	navigate("/");
			// }, 3000);
		} catch (error) {
			setError(error.response.data.message);
		}
	};
	return (
		<div>
			{success && (
				<ActivateForm
					type="success"
					header="Success! Your account is now active."
					text={success}
					loading={loading}
				/>
			)}
			{error && (
				<ActivateForm
					type="error"
					header="Account verification failed."
					text={error}
					loading={loading}
				/>
			)}
			<Header />
			<div className="homepage__wrapper">
				<LeftHome user={user} />
				<MiddleHome user={user} />
				<RightHome user={user} />
			</div>
		</div>
	);
}
