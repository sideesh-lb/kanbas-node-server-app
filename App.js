import express from 'express';
import mongoose from "mongoose";
import cors from "cors";
import Hello from './Hello.js';
import Lab5 from './Labs/Lab5.js';
import CourseRoutes from "./Kanbas/Courses/routes.js";
import ModuleRoutes from "./Kanbas/Modules/routes.js";
import UserRoutes from "./Kanbas/Users/routes.js"
import AssignmentRoutes from './Kanbas/Assignments/routes.js';
import session from "express-session";
import "dotenv/config";

const CONNECTION_STRING = process.env.DB_CONN_STRING || 'mongodb://127.0.0.1:27017/kanbas';

mongoose.connect(CONNECTION_STRING, { dbName: 'kanbas' });
const app = express();

app.use(express.json());
app.use(cors({
    credentials: true,
    origin: process.env.FRONTEND_URL,
}));

const sessionOptions = {
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
  sessionOptions.proxy = true;
  sessionOptions.cookie = {
    sameSite: "none",
    secure: true,
  };
}

app.use(
    session(sessionOptions)
);

// app.get('/hello', (req, res) => {res.send('Hello World - by sid! - Life is good - A Final Check 1')}) ;
// app.get('/', (req, res) => {res.send('Welcome to full stack development')});
CourseRoutes(app);
ModuleRoutes(app);
AssignmentRoutes(app);
UserRoutes(app);
Hello(app);
Lab5(app);

app.listen(process.env.PORT || 4000)