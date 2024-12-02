import db from "../Database/index.js";
import * as daoModule from './dao.js';
import * as daoCourse from '../Courses/dao.js';

const ModuleRoutes = (app) => {

    app.post('/api/courses/:cid/modules', async (req, res) => {
        const { cid } = req.params;
        const course = await daoCourse.findCourseById(cid);
        const newModule = {
            ...req.body,
            course: course.number,
        };
        const module = await daoModule.createModule(newModule)
        res.send(module);
    });

    app.delete('/api/modules/:mid', async (req, res) => {
        // const { mid } = req.params;
        // db.modules = db.modules.filter((m) => m._id !== mid);
        // res.sendStatus(200);
        const { mid } = req.params;
        const status = await daoModule.deleteModule(mid);
        res.json(status);
    });

    app.put('/api/modules/:mid', async(req, res) => {
        // const { mid } = req.params;
        // const moduleIndex = db.modules.findIndex(
        //     (m) => m._id === mid);
        // db.modules[moduleIndex] = {
        //     ...db.modules[moduleIndex],
        //     ...req.body
        // };
        // res.sendStatus(204);

        const { mid } = req.params;
        const module = req.body;
        const status = await daoModule.updateModule(mid, module);
        const updatedModule = await daoModule.findModuleById(mid);
        res.json(updatedModule);
    });

    app.get('/api/courses/:cid/modules', async (req, res) => {
        const course = await daoCourse.findCourseById(req.params.cid);
        const modules = await daoModule.findModulesByCourse(course.number);
        res.send(modules);
    });

};

export default ModuleRoutes;