const multer = require('multer');
const { dirname } = require('path');
const path = require('path');

module.exports = {
    storage: multer.diskStorage({
        destination: path.resolve('..','..','uploads'),
        filename: (req, file, cb )=> {
            const ext = path.extname(file.originalname);
            const name = path.basename(file.originalname, ext);
            cb(null,`${name}-${Date.now()}${ext}`);
        }
    })
};