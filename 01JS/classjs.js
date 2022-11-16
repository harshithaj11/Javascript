class User{
    constructor(name,email){
        this.name=name;
        this.email=email;

    }
    #courseList=[];
    EnrollCourse(name){
        this.#courseList.push(name);
    }
    getCourseList(){
        return this.#courseList;
    }
    getInfo(){
        return {name: this.name,email:this.email}

    }
}
module.exports=User;

const rock= new User("Rock","rock@roc.co");
rock.EnrollCourse("Angular");
console.log(rock.getCourseList());
console.log(rock.courseList);