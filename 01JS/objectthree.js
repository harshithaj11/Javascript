var user = {
    name:"",
    getUserName: function(){
        console.log(`UserName is: ${this.name}`);
    }
}
var harshitha = Object.create(user);
console.log(harshitha);  
harshitha.name = "Harshitha";
console.log(harshitha); 
harshitha.getUserName();

var sam = Object.create(user,{
    name : {value :"Sammy"},
    courseCount: {value:5},
 
})
sam.getUserName();
console.log(user);