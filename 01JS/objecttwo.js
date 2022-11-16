var user = function(firstName, courseCount){
    this.firstName = firstName;
    this.courseCount=courseCount;
    this.getCourseCount = function(){
        console.log(`Course count is: ${this.courseCount}`);
    }
}
user.prototype.getFirstName = function(){
    console.log(`Firstname is: ${this.firstName}`);
}   
//Injecting the property by prototype
var harshitha = new user("Harshitha",5);
if(harshitha.hasOwnProperty('firstName')){
    harshitha.getFirstName();
}
// execute only if property is there
harshitha.getCourseCount();
var sam = new user("Sammy",2);
sam.getFirstName();
sam.getCourseCount();   
//blunt call => if there is no property like this output will be undefined