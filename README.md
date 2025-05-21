# Hello World Test App

A simple Express.js application created to test and demonstrate deployment using Render. This project serves as a learning exercise for understanding modern web development technologies and deployment practices.

## Features

- Simple Express.js server
- Environment variable configuration
- Basic error handling
- Ready for deployment on Render

## Technologies Used

- [Express.js](https://expressjs.com) - Fast, unopinionated, minimalist web framework for Node.js
- [Node.js](https://nodejs.org) - JavaScript runtime environment
- [Render](https://render.com) - Cloud platform for hosting web services
- [dotenv](https://www.npmjs.com/package/dotenv) - Environment variable management

## Project Structure

```
hello-world-app/
├── app.js          # Main application file
├── package.json    # Project dependencies and scripts
├── .env           # Environment variables (create this file)
└── README.md      # Project documentation
```

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
PORT=3001
NODE_ENV=development
```

## Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/hello-world-app.git
   cd hello-world-app
   ```

2. Install dependencies:
   ```bash
   yarn install
   ```

3. Create and configure your `.env` file:
   ```bash
   cp .env.example .env  # If you have an example file
   # Or create .env manually with the variables mentioned above
   ```

4. Start the development server:
   ```bash
   node app.js
   ```

5. Visit `http://localhost:3001` in your browser

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | /        | Returns "Hello World" message |
| GET    | /health  | Health check endpoint |

## Deployment on Render

This application is configured for easy deployment on Render. Follow these steps:

1. Create a new Web Service on Render
2. Connect your GitHub repository
3. Configure the service with these settings:
   - Build Command: `yarn`
   - Start Command: `node app.js`
   - Environment Variables:
     - `PORT`: 3001
     - `NODE_ENV`: production
4. Deploy!

Your application will be live on your Render URL as soon as the build finishes.

## Preview

<a href="#">
  <img src="https://github.com/matiasrodlo/hello-world-app/assets/52969662/15e1c7d9-937c-4d0a-aca9-3e913a1f8913" alt="helloworld">
</a>

## Scripts

| Command | Description |
|---------|-------------|
| `yarn install` | Install dependencies |
| `node app.js` | Start the application |

## License

This project is open source and available under the MIT License.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
