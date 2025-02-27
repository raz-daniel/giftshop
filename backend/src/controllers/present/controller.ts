import { NextFunction, Response, Request } from "express";
import AppError from "../../errors/app-error";
import { StatusCodes } from "http-status-codes";
import Present from "../../model/presents";
import TargetMarket from "../../model/target-market";


export async function getPresents(req: Request<{ id: string }>, res: Response, next: NextFunction) {
    try {
        console.log('req.param.id', req.params.id)
        if (!req.params.id) {
            return next(new AppError(StatusCodes.BAD_REQUEST, 'cannot find category id'))
        }

        const presents = await TargetMarket.findByPk(req.params.id, {
            include: [ {
                model: Present
            } ]
        })

        console.log('presents:', presents)
        if (!presents) {
            return next(new AppError(StatusCodes.NOT_FOUND, 'Presents Not Found'))
        }

        res.status(StatusCodes.OK).json(presents)

    } catch (err) {
        console.error('getPresent Error:', err)
        next(new AppError(StatusCodes.INTERNAL_SERVER_ERROR, 'Failed to retrieve presents'))
    }
}

export async function deletePresent(req: Request<{ id: string }>, res: Response, next: NextFunction) {
    try {
        console.log('req.params.id:', req.params.id)
        if (!req.params.id) {
            return next(new AppError(StatusCodes.BAD_REQUEST, 'cannot find present id'))
        }

        const id = req.params.id
        const deletedCount = await Present.destroy({
            where: { id }
        })
        if (deletedCount === 0) {
            return next(new AppError(StatusCodes.NOT_FOUND, 'Present not found'))
        }

        res.status(StatusCodes.OK).json({ success: true })

    } catch (err) {
        console.error('Delete Present Error:', err)
        next(new AppError(StatusCodes.INTERNAL_SERVER_ERROR, 'Failed to delete present'))
    }
}

export async function createPresent(req: Request, res: Response, next: NextFunction) {
    try {
        
        const present = await Present.create({ ...req.body })
        console.log('present:', present)

        await present.reload({
            include: [ {
                model: Present
            } ]
        })

        res.status(StatusCodes.CREATED).json(present)

    } catch (err) {
        console.error('Creating Present Error:', err)
        next(new AppError(StatusCodes.INTERNAL_SERVER_ERROR, 'Failed to create present'))
    }

}
