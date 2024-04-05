import { config } from '@/config';
import { middleware, MiddlewareConfig } from '@line/bot-sdk';

export const lineMiddleware = middleware({
    // LINE middleware
    channelSecret: config.CHANNEL_SECRET || new Error('Channel secret is not provided'), // Channel secret
    channelAccessToken: config.ACCESS_TOKEN || new Error('Channel access token is not provided') // Channel access token
} as MiddlewareConfig); // Middleware configuration
