const mongoose = require("mongoose");

const { ObjectId } = mongoose.Schema;

const postShema = new mongooseSchema(
	{
		type: {
			type: String,
			enum: ["profilePicture", "cover", null],
			default: null,
		},
		text: {
			type: String,
		},
		images: {
			type: Array,
		},
		user: {
			type: ObjectId,
			ref: "User",
			required: true,
		},
		background: {
			type: String,
		},
		comments: [
			{
				comment: {
					type: String,
				},
				image: {
					type: String,
				},
				commentBy: {
					type: ObjectId,
					ref: "User",
				},
				createdAt: {
					type: Date,
					default: new Date(),
				},
			},
		],
	},
	{ timeStamps: true }
);

module.exports = mongoose.model("Post", postSchema);
