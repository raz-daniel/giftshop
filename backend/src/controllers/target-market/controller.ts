import { NextFunction, Response, Request } from "express";
import AppError from "../../errors/app-error";
import { StatusCodes } from "http-status-codes";
import TargetMarket from "../../model/target-market";


export async function getCategory(req: Request, res: Response, next: NextFunction) {
    try {
        const categories = await TargetMarket.findAll()
        console.log('categories:', categories)
        if (!categories || categories.length === 0) {
            return next(new AppError(StatusCodes.NOT_FOUND, 'Categories not found!'))
        }

        res.status(StatusCodes.OK).json(categories)

    } catch (err) {
        console.error('getCategory Error:', err)
        next(new AppError(StatusCodes.INTERNAL_SERVER_ERROR, 'Failed to retrieve categories'))

    }
}