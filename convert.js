const fs = require('fs');
const path = require('path');
const sharp = require('sharp');


const inputDir = path.join(__dirname, './images');

fs.readdir(inputDir, (err, files) => {
    if (err) {
        console.error("Could not list the directory.", err);
        process.exit(1);
    } 

    files.forEach((file, index) => {
        const inputFilePath = path.join(inputDir, file);
        
        if (file.match(/\.(jpg|jpeg|png|gif)$/i)) {
            const outputFilePath = path.join(inputDir, `${file.split('.').slice(0, -1).join('.')}.webp`);
            
            sharp(inputFilePath)
                .webp()
                .toFile(outputFilePath)
                .then(() => console.log(`${inputFilePath} converted in Webp.`))
                .catch(err => console.error(err));
        }
    });
});
