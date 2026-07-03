const {
    httpRequestsTotal,
    httpRequestDuration
} = require("../metrics/metrics");

const metricsMiddleware = (req, res, next) => {

    const end = httpRequestDuration.startTimer();

    res.on("finish", () => {

        httpRequestsTotal.inc({
            method: req.method,
            route: req.route ? req.route.path : req.path,
            status: res.statusCode
        });

        end({
            method: req.method,
            route: req.route ? req.route.path : req.path,
            status: res.statusCode
        });

    });

    next();
};

module.exports = metricsMiddleware;