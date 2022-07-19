const mongoose = require("mongoose");

const { ObjectId } = mongoose.Schema;

const userSchema = mongoose.Schema(
	{
		first_name: {
			type: String,
			requires: [true, "first name is required."],
			trim: true,
			text: true,
		},
		last_name: {
			type: String,
			requires: [true, "last name is required."],
			trim: true,
			text: true,
		},
		username: {
			type: String,
			requires: [true, "username is required."],
			trim: true,
			text: true,
			unique: true,
		},
		email: {
			type: String,
			requires: [true, "email is required."],
			trim: true,
		},
		password: {
			type: String,
			requires: [true, "password is required."],
		},
		picture: {
			type: String,
			trim: true,
			////////////////////default:"CLOUDINARY PROFILE PICK"
		},
		cover: {
			type: String,
			trim: true,
		},
		gender: {
			type: String,
			requires: [true, "gender is required."],
			trim: true,
		},
		verified: {
			type: Boolean,
			default: false,
		},
		friends: {
			type: Array,
			default: [],
		},
		following: {
			type: Array,
			default: [],
		},
		followers: {
			type: Array,
			default: [],
		},
		requests: {
			type: Array,
			default: [],
		},
		search: [
			{
				user: {
					type: ObjectId,
					ref: "User",
				},
			},
		],

		details: {
			bio: {
				type: String,
			},
			otherName: {
				type: String,
			},
			job: {
				type: String,
			},
			workplace: {
				type: String,
			},
			highSchool: {
				type: String,
			},
			college: {
				type: String,
			},
			currentCity: {
				type: String,
			},
			homeTown: {
				type: String,
			},
			relationship: {
				type: String,
				enum: ["Single", "In a relationship", "Married", "Divorced"],
			},
			instagram: {
				type: String,
			},
		},
		savedPost: [
			{
				post: {
					type: ObjectId,
					ref: "Post",
				},
				savedAt: {
					type: Date,
					default: new Date(),
				},
			},
		],
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("User", userSchema);
