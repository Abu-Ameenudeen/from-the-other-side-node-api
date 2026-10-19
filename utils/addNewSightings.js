import fs from "node:fs/promises"
import path from "node:path"
import { getData } from "./getData.js"

export async function addNewSightings(newSightings) {

    try {
        const sighting = await getData()
        sighting.push(newSightings)

        const JSONPath = path.join("data", "data.json")

        await fs.writeFile(
            JSONPath,
            JSON.stringify(sighting, null, 2),
            "utf8"
        )

    } catch (err) {
        throw new Error(err)
    }
}