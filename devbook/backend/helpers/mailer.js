const nodemailer = require("nodemailer");
const { google } = require("googleapis");

const { OAuth2 } = google.auth;
const oauth_link = "https://developers.google.com/oauthplayground";

const { EMAIL, MAILING_ID, MAILING_REFRESH, MAILING_SECRET } = process.env;

const auth = new OAuth2(
	MAILING_ID,
	MAILING_SECRET,
	MAILING_REFRESH,
	oauth_link
);

exports.sendVerificationEmail = (email, name, url) => {
	auth.setCredentials({
		refresh_token: MAILING_REFRESH,
	});
	const accessToken = auth.getAccessToken();
	const stmp = nodemailer.createTransport({
		service: "gmail",
		auth: {
			type: "OAuth2",
			user: EMAIL,
			clientId: MAILING_ID,
			refreshToken: MAILING_REFRESH,
			clientSecret: MAILING_SECRET,
			accessToken,
		},
	});
	const mailOptions = {
		from: EMAIL,
		to: email,
		subject: "Devbook email verification",
		html: `<div style="max-width:700px;margin-bottom:1rem;display:flex;align-items:center;gap:1rem;font-family:Montserrat,sans-serif;font-weight:600;color:#3b0273"><img src="./assets/devbook_icon.svg" alt="devbook logo" style="width:2rem"><span>Action require: Active your Devbook account</span></div><div style="padding:1rem 0;border-top:1px solid #e5e5e5;border-bottom:1px solid #e5e5e5;color:#0a0119;font-size:1rem;font-family:Montserrat,sans-serif"><span>Hello ${name}</span><div style="padding:1rem 0"><span style="padding:1.5rem 0">You recently created an account on Devbook.<br>To complete your registration, plese confirm your account.<br><br><br></span><a href=${url} style="padding:1rem 1rem;background:linear-gradient(#8507d9,#3b0273);border-radius:.5rem;box-shadow:4px 4px 4px rgb(00,00,00,.06);text-decoration:none;color:#fff;font-family:Montserrat;text-transform:uppercase;font-weight:500">Confirm your account</a></div></div><div style="padding:1rem 0;color:#0a0119;font-size:1rem;font-family:Montserrat,sans-serif;font-weight:500"><span>Devbook allows you to stay in touch with all devs around the world.</span></div>`,
	};

	stmp.sendMail(mailOptions, (err, res) => {
		if (err) return err;
		return res;
	});
};
