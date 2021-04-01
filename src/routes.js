"use strict";

const Companion = require("./schema/Companion");
const Doctor = require("./schema/Doctor");

const express = require("express");
const router = express.Router();

router.route("/")
    .get((_req, res) => {
        console.log("GET /");
        res.status(200).send({
            data: "App is running."
        });
    });

// ---------------------------------------------------
// Edit below this line
// ---------------------------------------------------

const data = require("../config/data.json");

router.route("/doctor")
    .get((_req, res) => {
        console.log("GET /doctor");
        res.status(501).send();
    })
    .post((req, res) => {
        console.log("POST /doctor");
        res.status(501).send();
    });

router.route("/doctor/:id")
    .get((req, res) => {
        console.log(`GET /doctor/${req.params.id}`);
        res.status(501).send();
    })
    .patch((req, res) => {
        console.log(`PATCH /doctor/${req.params.id}`);
        res.status(501).send();
    })
    .delete((_req, res) => {
        console.log(`DELETE /doctor/${req.params.id}`);
        res.status(501).send();
    });

router.route("/doctor/:id/companions")
    .get((req, res) => {
        console.log(`GET /doctor/${req.params.id}/companions`);
        res.status(501).send();
    });

router.route("/doctor/:id/companions/longest")
    .get((req, res) => {
        console.log("GET /doctor/:id/companions/longest");
        res.status(501).send();
    });

router.route("/doctor/:id/goodparent")
    .get((req, res) => {
        console.log("GET /doctor/:id/goodparent");
        res.status(501).send();
    });

router.route("/companion")
    .get((_req, res) => {
        console.log("GET /companion");
        res.status(501).send();
    })
    .post((req, res) => {
        console.log("POST /companion");
        res.status(501).send();
    });

router.route("/companion/:id")
    .get((_req, res) => {
        console.log(`GET /companion/${req.params.id}`);
        res.status(501).send();
    })
    .patch((req, res) => {
        console.log(`PATCH /companion/${req.params.id}`);
        res.status(501).send();
    })
    .delete((_req, res) => {
        console.log(`DELETE /companion/${req.params.id}`);
        res.status(501).send();
    });

router.route("/companion/:id/doctors")
    .get((req, res) => {
        console.log(`GET /companion/${req.params.id}/doctors`);
        res.status(501).send();
    });

router.route("/companion/:id/friends")
    .get((req, res) => {
        console.log(`GET /companion/${req.params.id}/friends`);
        res.status(501).send();
    });

router.route("/companion/crossover")
    .get((_req, res) => {
        console.log(`GET /companion/crossover`);
        res.status(501).send();
    });

router.route("/doctor/:id/favorite")
    .get((req, res) => {
        console.log(`GET /doctor/${req.params.id}/favorite`);
        res.status(501).send();
    })
    .post((req, res) => {
        console.log(`POST /doctor/${req.params.id}/favorite`);
        res.status(501).send();
    })
    .delete((req, res) => {
        console.log(`DELETE /doctor/${req.params.id}/favorite`);
        res.status(501).send();
    });

router.route("/companion/:id/favorite")
    .get((req, res) => {
        console.log(`GET /companion/${req.params.id}/favorite`);
        res.status(501).send();
    })
    .post((req, res) => {
        console.log(`POST /companion/${req.params.id}/favorite`);
        res.status(501).send();
    })
    .delete((req, res) => {
        console.log(`DELETE /companion/${req.params.id}/favorite`);
        res.status(501).send();
    });

module.exports = router;
