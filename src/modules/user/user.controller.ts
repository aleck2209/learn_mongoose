import type { Request, Response } from "express";
import { getUsers } from "./user.service.ts";

export const getUsersController = async(
	req: Request,
	res: Response,
) => {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;

    const results = await getUsers(page, limit)

    res.json(results);
};
