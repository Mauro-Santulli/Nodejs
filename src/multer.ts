import multer from 'multer';

export const multerOption={};

export const initMulterMiddleware = () =>{
    return multer(multerOption);
};