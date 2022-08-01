import { ErrorMessage, useField } from "formik";
import "./RegisterInput.scss";

export default function RegisterInput({ placeholder, ...props }) {
	const [field, meta] = useField(props);
	return (
		<div className="register__container flex__column__center">
			{meta.touched && meta.error && (
				<div className="input__error">
					{meta.touched && meta.error && <ErrorMessage name={field.name} />}
				</div>
			)}
			<input
				className={meta.touched && meta.error ? "input__error-border" : ""}
				type={field.type}
				name={field.name}
				placeholder={placeholder}
				{...field}
				{...props}
			/>
			{meta.touched && meta.error && <i className="error_icon"></i>}
		</div>
	);
}
