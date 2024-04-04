import express from 'express';
import cors from "cors";
import Hello from './Hello.js';
import Lab5 from './Labs/Lab5.js';
import CourseRoutes from "./Kanbas/Courses/routes.js";
import ModuleRoutes from "./Kanbas/Modules/routes.js";
import AssignmentRoutes from './Kanbas/Assignments/routes.js';

const app = express();
app.use(express.json());
app.use(cors());

// app.get('/hello', (req, res) => {res.send('Hello World - by sid! - Life is good - A Final Check 1')}) ;
// app.get('/', (req, res) => {res.send('Welcome to full stack development')});
CourseRoutes(app);
ModuleRoutes(app);
AssignmentRoutes(app);
Hello(app);
Lab5(app);

app.listen(process.env.PORT || 4000)