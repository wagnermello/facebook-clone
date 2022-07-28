const {
	validateEmail,
	validateLength,
	validateUsername,
} = require("../helpers/validation");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const { generateToken } = require("../helpers/tokens");

exports.register = async (req, res) => {
	try {
		const {
			first_name,
			last_name,
			email,
			password,
			username,
			bYear,
			bMonth,
			bDay,
			gender,
		} = req.body;

		if (!validateEmail(email)) {
			return res.status(400).json({
				message: "Invalid email address",
			});
		}
		const check = await User.findOne({ email });
		if (check) {
			return res.status(400).json({
				message:
					"This email address already exists, try with a different email address",
			});
		}

		if (!validateLength(first_name, 3, 30)) {
			return res.status(400).json({
				message: "First name must contain between 3 and 30 characters.",
			});
		}

		if (!validateLength(last_name, 3, 30)) {
			return res.status(400).json({
				message: "Last name must contain between 3 and 30 characters.",
			});
		}

		if (!validateLength(password, 6, 40)) {
			return res.status(400).json({
				message: "Password must be atleast 6 characters.",
			});
		}
		const cryptedPassword = await bcrypt.hash(password, 12);

		let tmpUsername = first_name + last_name;
		let newUsername = await validateUsername(tmpUsername);
		const user = await new User({
			first_name,
			last_name,
			email,
			password: cryptedPassword,
			username: newUsername,
			bYear,
			bMonth,
			bDay,
			gender,
		}).save();
		const emailVerificationTokem = generateToken(
			{ id: user._id.toString() },
			"30m"
		);
		console.log(emailVerificationTokem);

		res.json(user);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};
