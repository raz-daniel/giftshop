import { NextFunction, Response, Request } from "express";
import Post from "../../model/target-market";
import Comment from "../../model/comment";
import postIncludes from "../common/post-includes";
import AppError from "../../errors/app-error";
import { StatusCodes } from "http-status-codes";


export async function getPresents(req: Request<{ id: string }>, res: Response, next: NextFunction) {
    try {
        console.log('req.param.id', req.params.id)
        if (!req.params.id) {
            return next(new AppError(StatusCodes.BAD_REQUEST, 'cannot find category id'))
        }

        const presents = await Post.findByPk(req.params.id, postIncludes)
        console.log('post:', post)
        if (!post) {
            return next(new AppError(StatusCodes.NOT_FOUND, 'Post Not Found'))
        }

        res.status(StatusCodes.OK).json(post)

    } catch (err) {
        console.error('getPost Error:', err)
        next(new AppError(StatusCodes.INTERNAL_SERVER_ERROR, 'Failed to retrieve post'))
    }
}

export async function deletePost(req: Request<{ id: string }>, res: Response, next: NextFunction) {
    try {
        console.log('req.params.id:', req.params.id)
        if (!req.params.id) {
            return next(new AppError(StatusCodes.BAD_REQUEST, 'cannot find post id'))
        }

        const id = req.params.id
        const deletedCount = await Post.destroy({
            where: { id }
        })
        if (deletedCount === 0) {
            return next(new AppError(StatusCodes.NOT_FOUND, 'Posts not found'))
        }

        res.status(StatusCodes.OK).json({ success: true })

    } catch (err) {
        console.error('Delete Post Error:', err)
        next(new AppError(StatusCodes.INTERNAL_SERVER_ERROR, 'Failed to delete post'))
    }
}

export async function createPost(req: Request, res: Response, next: NextFunction) {
    try {
        const userId = req.userId
        console.log('userId:', userId)
        if (!userId) {
            return next(new AppError(StatusCodes.UNAUTHORIZED, 'Authentication Required'))
        }

        const post = await Post.create({ ...req.body, userId })
        console.log('post:', post)

        await post.reload(postIncludes)

        res.status(StatusCodes.CREATED).json(post)

    } catch (err) {
        console.error('Creating Post Error:', err)
        next(new AppError(StatusCodes.INTERNAL_SERVER_ERROR, 'Failed to create post'))
    }

}
