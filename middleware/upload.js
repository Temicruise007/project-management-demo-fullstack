const multer = require('multer');
const path = require('path');

//configure storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); //save file in uploads folder
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`); //append date to filename
    }
});

//File filter to allow only certain types of files
const fileFilter = (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|gif|pdf|json|csv|mp4|avi|mov|mkv|mp3|ogg|wav|flac/;
    const ext = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimeType = allowedTypes.test(file.mimetype);

    if (ext && mimeType) {
        return cb(null, true);
    } else {
        cb('Error: Only Images and PDFs, JSON, and CSV , videos, and audio files are allowed!');
    }
};


module.exports = multer({
    storage: storage,
    limits: { fileSize: 1024 * 1024 * 50 }, //50MB file size limit
    fileFilter: fileFilter
});