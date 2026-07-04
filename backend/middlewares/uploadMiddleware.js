import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) =>{
        
        cb(null, "uploads/"); // Diretório onde os arquivos serão armazenados
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname); // Nome do arquivo armazenado
    },
});

const upload = multer({storage});

export default upload;