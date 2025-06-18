// use of object desturcturing and its basics
const course = {
    courseName: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

console.log(course.courseInstructor);

const {courseInstructor} = course
console.log(courseInstructor);

const {price : pf} = course
console.log(pf);

// syntax ---> const {which object you want to access i.e OBJECT METHOD NAME : ALTERNATE SHORTER NAME} = OBJECT NAME