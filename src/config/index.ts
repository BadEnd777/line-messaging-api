import 'dotenv/config';

const PORT = process.env.PORT || 3000;

export const config = {
    // Configuration object
    PORT, // Port for the server
    ACCESS_TOKEN: process.env.ACCESS_TOKEN, // Access token for the LINE Messaging API
    CHANNEL_SECRET: process.env.CHANNEL_SECRET // Channel secret for the LINE Messaging API
};
