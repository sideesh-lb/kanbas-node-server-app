import model from "./model.js";

export const createModule = (module) => {
    delete module._id
    return model.create(module);
};

export const findAllModules = () => {
   return model.find();
};

export const findModuleById = (moduleId) => {
    return model.findById(moduleId);
};

export const findModuleByModuleName = (modulename) => {
    return model.findOne({name: modulename});
};

export const updateModule = (moduleId, module) => model.updateOne({ _id: moduleId }, { $set: module });

export const deleteModule = (moduleId) => {
    return model.deleteOne({_id: moduleId});
};

export const findModulesByCourse = (course) => model.find({ course: course });
