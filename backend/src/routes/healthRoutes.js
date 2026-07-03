const express = require("express");
const router = express.Router();

const {
    health,
    live,
    ready
} = require("../controllers/healthController");

// Overall application health
router.get("/", health);

// Kubernetes Liveness Probe
router.get("/live", live);

// Kubernetes Readiness Probe
router.get("/ready", ready);

module.exports = router;