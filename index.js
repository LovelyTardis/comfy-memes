import express from "express";

const app = express();
const port = 80;

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);

    app.get("/", (req, res) => {
        res.json({
            "code": 200,
            "message": "OK"
        });
    });

    app.get("/:id", (req, res) => {
        const { id } = req.params;

        res.json({
            code: 200,
            message: id
        });
    });
});