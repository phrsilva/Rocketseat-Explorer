const path = require('path');
const multer = require('multer');

const TMP_FOLDER = path.resolve(__dirname, '..', '..', 'tmp');
const UPLOADS_FOLDER = path.resolve(__dirname, '..', '..', 'uploads');
const MULTER = {
    storage: multer.diskStorage({
        destination: TMP_FOLDER,
        filename(request, file, callback) {
            const fileHash = Date.now() + '-' + file.originalname;
            const fileName = path.resolve(UPLOADS_FOLDER, fileHash);
            callback(null, fileName);
        }
        
    })
    
}


module.exports = {
    TMP_FOLDER,
    UPLOADS_FOLDER: path.resolve(TMP_FOLDER, 'uploads'),
}

