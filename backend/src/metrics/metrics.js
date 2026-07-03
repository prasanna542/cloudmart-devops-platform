const client = require("prom-client");

// Collect default Node.js metrics
client.collectDefaultMetrics();

// HTTP Request Counter
const httpRequestsTotal = new client.Counter({
    name: "http_requests_total",
    help: "Total number of HTTP requests",
    labelNames: ["method", "route", "status"]
});

// HTTP Response Time Histogram
const httpRequestDuration = new client.Histogram({
    name: "http_request_duration_seconds",
    help: "Duration of HTTP requests in seconds",
    labelNames: ["method", "route", "status"],
    buckets: [0.1, 0.3, 0.5, 1, 2, 5]
});

module.exports = {
    client,
    httpRequestsTotal,
    httpRequestDuration
};