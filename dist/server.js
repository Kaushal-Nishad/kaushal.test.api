"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); // Use express as default and import Application type
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const db_1 = __importDefault(require("./config/db"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const globalExceptionFilter_1 = require("./middlewares/globalExceptionFilter");
const swagger_1 = require("./config/swagger");
// Load environment variables
dotenv_1.default.config();
// Connect to the database
(0, db_1.default)();
// Create an Express application
const app = (0, express_1.default)();
// Setup Swagger for API documentation
(0, swagger_1.setupSwagger)(app);
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use('/uploads', express_1.default.static('uploads'));
app.use('/api', userRoutes_1.default);
// Global exception filter
app.use(globalExceptionFilter_1.globalExceptionFilter);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`API documentation available at http://localhost:${PORT}/api-docs`);
});
