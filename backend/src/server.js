require("dotenv").config();

const app = require("./app");
const pool = require("./config/db");
const logger = require("./config/logger");

const PORT = process.env.PORT || 5000;

let server;

// Start Server
async function startServer() {
    try {
        // Check database connection
        await pool.query("SELECT 1");
        logger.info("Connected to MySQL database");

        server = app.listen(PORT, () => {
            logger.info(`Server is running on port ${PORT}`);
        });

    } catch (error) {
        logger.error(`Failed to connect to MySQL: ${error.message}`);
        process.exit(1);
    }
}

// Graceful Shutdown
async function shutdown(signal) {
    logger.info(`${signal} received. Shutting down gracefully...`);

    server.close(async () => {
        logger.info("HTTP server stopped.");

        try {
            await pool.end();
            logger.info("MySQL connection pool closed.");
            process.exit(0);
        } catch (error) {
            logger.error(`Error closing MySQL connection: ${error.message}`);
            process.exit(1);
        }
    });
}

// Listen for termination signals
process.on("SIGINT", () => shutdown("SIGINT"));
process.on("SIGTERM", () => shutdown("SIGTERM"));

// Start the application
startServer();