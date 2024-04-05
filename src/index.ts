import { config } from '@/config';
import { lineRouter } from '@/routes/line.routes';
import { client } from '@/services/line.service';
import express, { NextFunction, Request, Response } from 'express';

const app = express();

app.get('/', (_req, res) => res.send('Hello World!'));

app.use((err: Error, _req: Request, _res: Response, next: NextFunction) => {
    // Error handler
    console.error(err);
    next(err);
});

app.use('/api/line', lineRouter);

app.listen(config.PORT, async () => {
    // Start the server
    try {
        const bot = await client.getBotInfo(); // Get bot info
        console.log(`Logged at ${bot.displayName} (${bot.basicId})`); // Log bot info
        console.log(`Server listening on port: ${config.PORT}`); // Log server info
    } catch (error) {
        console.error('Error while starting the bot', error);
        process.exit(1); // Exit the process if an error occurs
    }
});
