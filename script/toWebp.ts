import * as path from "path";
import {pathExists, readdir} from "fs-extra";
import sharp = require("sharp");

let doIt = async ()=> {
    let assetsPath = path.resolve(__dirname, "..", "assets")
    let fileNames = await readdir(assetsPath)

    for(let fileName of fileNames) {
        let ext = path.extname(fileName)
        let filePath = path.resolve(assetsPath, fileName)

        if(ext === ".webp") {
            continue
        }

        let newFileName = fileName.replace(ext, ".webp")
        let newFilePath = path.resolve(assetsPath, newFileName)

        if(await pathExists(newFilePath)) {
            continue
        }

        await sharp(filePath)
            .resize(720, 720, {
                fit: "inside",
            })
            .webp()
            .toFile(newFilePath)
    }
}

doIt()