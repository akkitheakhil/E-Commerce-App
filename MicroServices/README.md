# E-Commerce - API

An API build for E-Commerce app.
- TypeScript + Mongoose + MongoDB + Node Express API Server

# Pre-reqs
To build and run this app locally you will need a few things:
- Install [Node.js](https://nodejs.org/en/)
- Install [VS Code](https://code.visualstudio.com/)

## Installation

Use the Node Package Manager ([npm](https://www.npmjs.com/)) to install the API.

```bash
npm install
```

## Commands

Running locally:

```bash
npm run dev
```

Running in production:

```bash
npm start
```

Running test:

```bash
# run all tests
npm run test
```

Building:

```bash
# run all tests
npm run build
```

## Environment Variables

The environment variables can be found and modified in the `.env-sample` file. First, rename the file to `.env`.
They come with these default values:

```bash
# URL of the Mongo DB
MONGO_HOST= <mongohostname>
MONGO_PORT= <mongoport>
MONGO_DATABASE= <mongodbname>

# Firebase admin/service account configs
FIREBASE_PROJECT_ID = <firebase-projectid>
FIREBASE_PRIVATE_KEY = <firebase-private_key>
FIREBASE_CLIENT_EMAIL = <firebase-client_email>

# Admin email to validate admin routes and provide access control
ADMIN_ACCOUNT_EMAILS = [ 'adminemail1', 'adminemail2', 'adminemail3']

# Port number
PORT=3000
```

## Project Structure

```
src\
 |--controllers\    # Route controllers (controller layer)
 |--database\       # Mongo DB connections
 |--dto\            # Data Transfer Objects
 |--exceptions\     # Custom exception handler
 |--interface\      # Interfaces
 |--logs\           # Saved log files (info logs and error logs)
 |--middlewares\    # Custom express middlewares
 |--models\         # Mongoose models (data layer)
 |--routes\         # Routes
 |--services\       # Business logic (service layer)
 |--tests\          # Test class for the projects
 |--utils\          # Utility classes and functions
 |--.env            # Environment configs
 |--app.ts          # Express app
 |--server.ts       # App entry point
```


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
