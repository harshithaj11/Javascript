const User = require("./classjs.js");
const harshitha=new User('harshitha','harshi@dev.co');
harshitha.EnrollCourse("React Bootcamp");
harshitha.EnrollCourse("Js Bootcamp");

console.log(harshitha.getInfo());
console.log(harshitha.getCourseList());


let course = harshitha.getCourseList();
let i=0
course.forEach(c => {
    i++;
    console.log(i+". "+c);
});
console.log("Course enrolled: "+i);


console.log("Course enrolled: "+ course.length);