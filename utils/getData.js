import fs from "node:fs/promises"
import path from "node:path"

export async function getData() {
    try {
        const pathToData = path.join("data", "data.json")
        const data = await fs.readFile(pathToData, "utf-8")
        return JSON.parse(data)
    } catch (err) {
        return []
    }
}