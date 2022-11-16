var user = {
    firstName:"Harshitha",
    lastName :"J",
    loggedInFacebook: true,
    loginCount: 30,
    courseList:[],
    buyCourse: function(courseName){
        this.courseList.push(courseName);
    },
    getCourseCount:function(){
        return `Courses registered by user: ${this.courseList.length}`
    },
    getInfo: function(){
        return `First Name :${this.firstName} 
        Last Name: ${this.lastName}
        Logged In Facebook: ${this.loggedInFacebook}
        Login Count: ${this.loginCount}
        Course List: ${this.courseList}
        CourseList Count: ${this.courseList.length} `
    }
}
var courseList=true;
user.buyCourse("React and Js");
user.buyCourse("Python");
console.log(user.getInfo());