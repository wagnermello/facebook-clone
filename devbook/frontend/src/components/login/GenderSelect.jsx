import React from "react";
import "./GenderSelect.scss";

export default function GenderSelect({ handleRegisterChange }) {
	return (
		<div className="flex__row__center register__form__gender__label gap__x16">
			<label htmlFor="male">
				Male
				<input
					type="radio"
					name="gender"
					id="male"
					value="male"
					onChange={handleRegisterChange}
				/>
			</label>
			<label htmlFor="female">
				Female
				<input
					type="radio"
					name="gender"
					id="female"
					value="female"
					onChange={handleRegisterChange}
				/>
			</label>
			<label htmlFor="custom">
				Custom
				<input
					type="radio"
					name="gender"
					id="custom"
					value="custom"
					onChange={handleRegisterChange}
				/>
			</label>
		</div>
	);
}
