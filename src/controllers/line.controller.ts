import { handleEvent } from '@/services/line.service';
import { Request, Response } from 'express';

export const lineController = (req: Request, res: Response) => {
    // Webhook controller
    try {
        const { body } = req; // Get the body from the request
        Promise.all(body.events.map(handleEvent)) // Handle each event
            .then((result) => res.json(result))
            .catch((err) => {
                // Catch any error
                console.error(err);
                res.status(500).end();
            });
    } catch (error) {
        console.error(error);
        res.status(500).end();
    }
};

export default lineController;
