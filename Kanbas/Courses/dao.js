import model from "./model.js";

export const createCourse = (course) => {
    delete course._id
    return model.create(course);
};

export const findAllCourses = () => {
   return model.find();
};

export const findCourseById = (courseId) => {
    return model.findById(courseId);
};

export const findCourseByCourseName = (coursename) => {
    return model.findOne({name: coursename});
};

export const updateCourse = (courseId, course) => model.updateOne({ _id: courseId }, { $set: course });

export const deleteCourse = (courseId) => {
    return model.deleteOne({_id: courseId});
};

export const findCoursesByNumber = (number) => model.find({ number: number });
