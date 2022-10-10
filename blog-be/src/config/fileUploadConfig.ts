import multer from 'multer'
import path from "path";
import fs from "fs";

const DIRECTORY_NAME = "upload-images"

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // const dir = `${path.resolve("./")}${DIRECTORY_NAME}`;
    // if (!fs.existsSync(dir)) {
    //   fs.mkdirSync(dir, { recursive: true });
    // }

    cb(null, DIRECTORY_NAME);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      `${file.fieldname}-${uniqueSuffix}${path.extname(file.originalname)}`
    );
  }
})

export const upload = multer({ storage: storage });