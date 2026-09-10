import { User } from "./user.model.ts";

export const getUser = async (page: number = 1, limit: number = 10) => {
	if (page < 1) {
		throw new Error("Page must be greater than 0");
	}

	if (limit < 1) {
		throw new Error("Limit must be greater than 0");
	}

	if (limit > 100) {
		throw new Error("Limit cannot exceed 100");
	}

	const skip = (page - 1) * limit;

    const [users, total] = await Promise.all([
        User.find()
		.select("name email age role")
		.sort({ createdAt: -1 })
		.skip(skip)
		.limit(limit)
		.lean(),

        User.countDocuments()
    ]);

	const totalPage: number = Math.ceil(total / limit);

	return {
		data: users,
		page,
		limit,
		total,
		totalPage,
	};
};
