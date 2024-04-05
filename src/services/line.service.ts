import { config } from '@/config';
import { Client, ClientConfig, Message, MessageEvent, TextMessage } from '@line/bot-sdk';

export const client = new Client({
    // LINE client
    channelSecret: config.CHANNEL_SECRET || new Error('Channel secret is not provided'), // Channel secret
    channelAccessToken: config.ACCESS_TOKEN || new Error('Channel access token is not provided') // Channel access token
} as ClientConfig); // Client configuration

export const handleEvent = async (event: MessageEvent) => {
    const { replyToken } = event; // Get the reply token
    const { text } = event.message as TextMessage; // Get the text message

    try {
        const message: Message = {
            // Create a message
            type: 'text',
            text: `You said: ${text}`
        };

        await client.replyMessage(replyToken, message); // Reply to the user
    } catch (error) {
        console.error('Error while handling the event', error);
        return Promise.reject(error);
    }
};
