console.log(this);
var user = {
    firstName:"Harshitha",
    lastName :"J",
    loggedInFacebook: true,
    loginCount: 30,

    getCourseCount:function(){
         console.log(this);
         function sayHello(){
            console.log("Hey",this);
         }
         sayHello();//regular function call
    }

}
user.getCourseCount();//call through object