const express = require("express");
const router = express.Router();
const taskStorage = require("../storage/mongo/task");

router.post("/", async (req, res) => {
    try {
        const response = await taskStorage.create(req.body);
        return res.status(201).send({ id: response });
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
});

router.get("/", async (req, res) => {
    try {
        const response = await taskStorage.getAll();
        return res.status(200).send(response);
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
});

router.put("/:id", async (req, res) => {
    try {
        const response = await taskStorage.update(req.params.id, req.body);
        return res.status(200).send({ id: response });
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const response = await taskStorage.get(req.params.id);
        return res.status(200).send(response);
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const response = await taskStorage.delete(req.params.id);
        return res.status(200).send({ msg: response });
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
});

module.exports = router;
