"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalExceptionFilter = void 0;
const globalExceptionFilter = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        message: 'Internal Server Error',
        error: err.message,
    });
};
exports.globalExceptionFilter = globalExceptionFilter;
