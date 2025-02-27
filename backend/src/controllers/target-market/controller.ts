import { NextFunction, Response, Request } from "express";
import AppError from "../../errors/app-error";
import { StatusCodes } from "http-status-codes";
import TargetMarket from "../../model/target-market";


export async function getCategory(req: Request, res: Response, next: NextFunction) {
    try {
        const category = await TargetMarket.findByPk()
        console.log('category:', category)
        if (!category) {
            return next(new AppError(StatusCodes.NOT_FOUND, 'Category not found!'))
        }

        const plainUser = category.get({ plain: true })
        if (!plainUser.category || plainUser.category.length === 0) {
            return next(new AppError(StatusCodes.NOT_FOUND, 'No category found'))
        }

        res.status(StatusCodes.OK).json(plainUser.category)

    } catch (err) {
        console.error('getCategory Error:', err)
        next(new AppError(StatusCodes.INTERNAL_SERVER_ERROR, 'Failed to retrieve categories'))

    }
}