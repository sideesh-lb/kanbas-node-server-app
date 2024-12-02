// import courses from "../Database/courses.js";
import Database from "../Database/index.js";
import * as dao from './dao.js';

const CourseRoutes = (app) => {

    app.post("/api/courses", async (req, res) => {
        const course = await dao.createCourse(req.body);
        res.send(course);
    });

    app.get("/api/courses", async (req, res) => {
        const courses = await dao.findAllCourses();
        res.send(courses);
    });

    app.get("/api/courses/:id", async (req, res) => {
        // const { id } = req.params;
        // const course = Database.courses.find((c) => c._id === id);
        // if (!course) {
        //     res.status(404).send("Course Not Found");
        //     return;
        // }
        // res.send(course);

        const course = await dao.findCourseById(req.params.id);
        res.json(course);
    });

    app.put("/api/courses/:id", async (req, res) => {
        const { id } = req.params;
        const course = req.body;
    //     Database.courses = Database.courses.map((c) => 
    //         c._id === id ? { ...c, ...course } : c
    // );
        const status = await dao.updateCourse(id, course);
        const updatedCourse = await dao.findCourseById(id);
        res.json(updatedCourse);
    });

    app.delete("/api/courses/:id", async (req, res) => {
        const { id } = req.params;
        const status = await dao.deleteCourse(id);
        res.json(status);
    });
};

export default CourseRoutes;