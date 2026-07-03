require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const productRoutes = require("./routes/productRoutes");
const healthRoutes = require("./routes/healthRoutes");
const errorHandler = require("./middleware/errorHandler");
const metricsMiddleware = require("./middleware/metricsMiddleware");
const metricsRoutes = require("./routes/metricsRoutes");

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(metricsMiddleware);

app.use("/health", healthRoutes);
app.use("/metrics", metricsRoutes);
app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
    res.json({
        message: "CloudMart API is running"
    });
});

// Global Error Handler (Always Last)
app.use(errorHandler);
module.exports = app;