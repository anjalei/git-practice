function Person(firstName, lastName, age, sex) {
    this.age = age;
    this.firstName = firstName;
    this.lastName = lastName;
    this.sex = sex;
    this.printFullName = function () {
          console.log(this.firstName + " " + this.lastName);
    };
  }
  
  Person.prototype.findegligibleOrNot = function findegligibleOrNot(minAge) {
      console.log(this.person.age >= 18 ? "ELIGIBLE" : "NOT ELIGIBLE");
  };
  
  
  function createNewStudents(){
      const person1 = new Person("yash", "prasad", 10, "M");
      const person2 = new Person("vaibhav", "prasad", 20, "M");
      const person3 = new Person("dhinesh","kumar",18,"M");
      person1.printFullName();
      person1.findegligibleOrNot(18);
      person2.printFullName();
      person2.findegligibleOrNot(18);
  
  }