import * as path from "path";
import {readdir} from "fs-extra";
import sharp = require("sharp");

let doIt = async ()=> {
    let assetsPath = path.resolve(__dirname, "..", "assets")
    let fileNames = await readdir(assetsPath)

    for(let fileName of fileNames) {
        let ext = path.extname(fileName)
        let filePath = path.resolve(assetsPath, fileName)

        if(ext === ".jpeg") {
            continue
        }

        let newFileName = fileName.replace(ext, ".jpeg")
        let newFilePath = path.resolve(assetsPath, newFileName)

        await sharp(filePath)
            .jpeg()
            .toFile(newFilePath)
    }
}

doIt()