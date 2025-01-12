const fs = require('fs');
const path = require('path');
const uploadConfig = require('../configs/upload');

class DiskStorage {
    async saveFile(file) {
        const originalPath = path.resolve(uploadConfig.TMP_FOLDER, file);
        const destinationPath = path.resolve(uploadConfig.UPLOADS_FOLDER, file);

        await fs.promises.rename(originalPath, destinationPath);

        return file;
    }

    async deleteFile(file) {
        const filePath = path.resolve(uploadConfig.UPLOADS_FOLDER, file);

        try {
            await fs.promises.stat(filePath);
            
        } catch (error) {
            return
        }

        await fs.promises.unlink(filePath);

    }
}

module.exports = DiskStorage;