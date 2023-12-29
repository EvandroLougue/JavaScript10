const fs = require('fs').promises;
const path = require('path');

async function readdir(rootDir) {
    rootDir = rootDir || path.resolve(__dirname);
    const files = await fs.readdir(rootDir);
    walk(files, rootDir);
}

async function walk(files, rootDir) {
    for (let file of files) {
        const filePath = path.resolve(rootDir, file);
        const stats = await fs.stat(filePath)
        
        if (stats.isDirectory()) {
            readdir(filePath);
            continue;
        }
        
        console.log(filePath, stats.isDirectory());

    }
}

readdir('C:/Users/joalc/Documents/GitHub/JavaScript10');