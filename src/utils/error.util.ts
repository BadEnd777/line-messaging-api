import { Response } from 'express';

export const handleError = (res: Response, error: { status: number; message: string }) => {
    // Handle error
    console.error(error.message);
    res.status(error.status).end();
};
