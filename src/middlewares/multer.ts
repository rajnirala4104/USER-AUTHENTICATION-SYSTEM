import multer from "multer";

// from the documentation
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, "./src/public/temp");
  },
  filename: function (req, file, cb) {
    // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)

    return cb(null, `${file.fieldname}-${file.originalname}`);
  },
});

export const upload = multer({ storage: storage });
