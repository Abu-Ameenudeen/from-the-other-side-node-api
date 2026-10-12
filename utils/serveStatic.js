import fs from "node:fs/promises"
import path from "node:path"
import { getContentType } from "./getContentType.js"
import { sendResponse } from "./sendResponse.js"

export async function serveStatic(req, res, baseDir) {

    const pathToPublicDir = path.join(baseDir, "public")

    const filePath = path.join(
        pathToPublicDir,
        req.url === "/" ? "index.html" : req.url
    )

    const ext = path.extname(filePath)

    try {
        const content = await fs.readFile(filePath)
        sendResponse(req, res, 200, getContentType(ext), content)

    } catch (err) {
        if (err.code === "ENOENT") {
            const content = await fs.readFile(path.join(pathToPublicDir, "404.html"))
            sendResponse(req, res, 404, "text/html", content)

        } else {
            sendResponse(req, res, 500, "text/html", `<html><h1>Server Error: ${err.code}</h1></html>`)

        }

    }

}