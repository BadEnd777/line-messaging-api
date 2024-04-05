import { handleError } from '@/utils/error.util';
import { NextFunction, Request, Response } from 'express';

export const errorMiddleware = (err: Error, _req: Request, res: Response, next: NextFunction) => {
    // Error middleware
    if (err instanceof Error) {
        handleError(res, {
            // Handle error
            status: 500, // Status code
            message: err.message // Error message
        });
    } else {
        next(err);
    }
};
