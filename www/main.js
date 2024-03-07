import http from "http"
import express from "express"

const app = express()
const port = process.env.PORT || 8080;

app.use(express.static("www"))
app.listen(port, () => {
    console.log("server listening on port: ${port}");
})
