var harshitha = {
    firstName: "Harshitha",
    lastName:"J",
    courseCount: 5,
    role: "Admin",
    getInfo: function() {
        console.log(
            `First Name is: ${this.firstName}
            Last Name is : ${this.lastName}
            Course Completed : ${this.courseCount}
            Role is: ${this.role}`);
    }
}
var sam = {
    firstName: "Sammy",
    lastName:"Joe",
    courseCount: 8,
    role: "Sub-Admin",
}

//Bind - returns the reference

//method 1
// harshitha.getInfo.bind(sam)();

//method 2 
// var samGetInfo = harshitha.getInfo.bind(sam);
// samGetInfo();

//call - direct call to method
harshitha.getInfo.call(sam);