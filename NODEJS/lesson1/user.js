function User(name,age){
    this.name=name;
    this.age = age;
    this.fullname = function(){
        console.log(`Hello my name is ${this.name} I am  ${this.age} years old`)
    }
};





module.exports=User;
