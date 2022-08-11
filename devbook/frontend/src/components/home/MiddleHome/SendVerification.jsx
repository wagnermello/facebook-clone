import React, { useState } from "react";
import axios from "axios";

export default function SendVerification({ user }) {
	const [error, setError] = useState("");
	const [success, setSuccess] = useState("");
	const sendVerificationLink = async () => {
		try {
			const { data } = await axios.post(
				`${process.env.REACT_APP_BACKEND_URL}/sendVerification`,
				{},
				{
					headers: {
						Authorization: `Bearer ${user.token}`,
					},
				}
			);
			setSuccess(data.message);
		} catch (error) {
			setError(error.response.data.message);
		}
	};
	return (
		<div className="send-verification">
			<span>
				Your account is not verified. Verify your account before it gets deleted
				after a month from creating.
			</span>
			<a
				onClick={() => {
					sendVerificationLink();
				}}
			>
				{" "}
				Click here to resend notification link.
			</a>
			{success && <div className="success-text">{success}</div>}
			{error && <div className="error-text">{error}</div>}
		</div>
	);
}
