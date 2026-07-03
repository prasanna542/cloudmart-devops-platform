const db = require("../config/db");

async function health(req, res) {
    try {
        await db.query("SELECT 1");

        res.status(200).json({
            status: "UP",
            database: "CONNECTED",
            timestamp: new Date().toISOString()
        });

    } catch (err) {

        res.status(503).json({
            status: "DOWN",
            database: "DISCONNECTED",
            timestamp: new Date().toISOString()
        });

    }
}

function live(req, res) {

    res.status(200).json({
        status: "UP",
        timestamp: new Date().toISOString()
    });

}

async function ready(req, res) {

    try {

        await db.query("SELECT 1");

        res.status(200).json({
            status: "READY",
            timestamp: new Date().toISOString()
        });

    } catch (err) {

        res.status(503).json({
            status: "NOT_READY",
            timestamp: new Date().toISOString()
        });

    }

}

module.exports = {
    health,
    live,
    ready
};