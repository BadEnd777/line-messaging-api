import { lineController } from '@/controllers/line.controller';
import { lineMiddleware } from '@/middleware/line.middleware';
import { Router } from 'express';

export const lineRouter: Router = Router(); // Create a router

lineRouter.post('/', lineMiddleware, lineController); // Webhook route for LINE
