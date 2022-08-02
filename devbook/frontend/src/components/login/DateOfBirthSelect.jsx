import React from "react";
import "./DateOfBirthSelect.scss";

export default function DateOfBirthSelect({
	bDay,
	bMonth,
	bYear,
	days,
	months,
	years,
	handleRegisterChange,
}) {
	return (
		<div className="flex__row__center register__form__birth__select gap__x16">
			<select name="bDay" value={bDay} onChange={handleRegisterChange}>
				{days.map((day, i) => (
					<option value={day} key={i}>
						{day}
					</option>
				))}
			</select>
			<select name="bMonth" value={bMonth} onChange={handleRegisterChange}>
				{months.map((month, i) => (
					<option value={month} key={i}>
						{month}
					</option>
				))}
			</select>
			<select name="bYear" value={bYear} onChange={handleRegisterChange}>
				{years.map((year, i) => (
					<option value={year} key={i}>
						{year}
					</option>
				))}
			</select>
		</div>
	);
}
