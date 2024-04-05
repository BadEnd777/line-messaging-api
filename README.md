# Line Messaging API

This project is a simple API for sending messages to Line users. It is written in [TypeScript](https://www.typescriptlang.org/) and utilizes the [Express](https://expressjs.com/) framework.

## Project Structure

-   `src` contains the source code of the project.
    -   `config` contains configuration files.
    -   `controllers` contains controller functions for handling requests.
    -   `middlewares` contains middleware functions for processing requests.
    -   `routes` contains route definitions.
    -   `services` contains service functions for handling business logic.
    -   `utils` contains utility functions.
    -   `index.ts` is the entry point of the application.
-   `.env` contains environment variables.
-   `.eslintrc` contains ESLint configuration.
-   `.prettierignore` contains files to be ignored by Prettier.
-   `.prettierrc` contains Prettier configuration.
-   `tsconfig.json` contains TypeScript configuration.
-   `tsup.config.ts` contains tsup configuration.

## Installation

To get started with this project, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/BadEnd777/line-messaging-api.git
    cd line-messaging-api
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file and configure your environment variables. You can use `.env.example` as a template.

4. Build the project:

    ```bash
    npm run build
    ```

5. Start the server:
    ```bash
    npm start
    ```

## Endpoints

### Line Messaging API Endpoints (/api/line)

Use these endpoints to verify the webhook URL and send messages to Line users.

## Scripts

-   `npm run build`: Builds the project using `tsup`.
-   `npm run dev`: Starts the development server with watch mode.
-   `npm run format:fix`: Formats code using Prettier.
-   `npm run lint`: Lints TypeScript files using ESLint.
-   `npm start`: Starts the server.

Feel free to customize and expand upon this template according to your project's specific needs.
