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

    try {
        const content = await fs.readFile(filePath)
        const ext = path.extname(filePath)
        sendResponse(req, res, 200, getContentType(ext), content)
    } catch (err) {
        console.log(err)
    }

}