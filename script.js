//Question 1 : The class Movie is stated below. An instance of class Movie represents a film. 
//             This class has the following three properties:
//                 title, which is a String representing the title of the movie
//                 studio, which is a String representing the studio that made the movie
//                 rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)

class Movie{
    constructor(title,studio,rating="PG"){
        this._title=title;
        this._studio=studio;
        this._rating=rating;
    }
    set pg(val){
        this.pg=val;
    }
    get pg(){
        return this.pg;
    }
}
const movie = new Movie("Casino","Eon");
const movie2=new Movie("Casino Royale","Eon Productions","PG-13");
console.log(movie._title);
console.log(movie._studio);
console.log(movie._rating);
console.log(movie2._title);
console.log(movie2._studio);
console.log(movie2._rating);

//Question 2 : Convert the UML diagram to Typescript class. - use number for double

class Circle{
    constructor(radius,color){
        this._radius=radius;
        this._color=color;
    }
    get radiusCircle(){
        return this._radius;
    }
    set radiusCircle(radius){
        this._radius=radius;
    }
    get colorCircle(){
        return this._color;
    }
    set colorCircle(color){
        this._color=color;
    }
    get toString(){
        return `"Circle[radius= ${this._radius},color=${this._color}]"`
    }
    get areaCircle(){
        return Math.PI * this._radius * this._radius;
    }
    get circumferenceCircle(){
        return 2* Math.PI * this._radius;
    }
}
var circleObj= new Circle(1.0,"red");
console.log(circleObj.radiusCircle);
//circleObj.radiusCircle = 1.5;
console.log(circleObj.radiusCircle=5.8);
console.log(circleObj.colorCircle);
//circleObj.colorCircle = "White";
console.log(circleObj.colorCircle="White");
console.log(circleObj.toString);
console.log(circleObj.areaCircle);
console.log(circleObj.circumferenceCircle);

//Question 3 : Write a “person” class to hold all the details.

class Person{
    constructor(name,age,gender,salary=18000){
        this.name=name;
        this.age=age;
        this.gender=gender;
        this.salary=salary;
    }
}
var person1 = new Person("Joe",20,"Male");
var person2 = new Person("John",30,"Male",40000);
var person3 = new Person("Jack",40,"Male",60000);
console.log(person1.name);
console.log(person1.age);
console.log(person1.gender);
console.log(person1.salary);
//console.log(this);
console.log(`The Person Names are 
"Person 1 ":${person1.name}
"Person 2 ":${person2.name}
"Person 3 ":${person3.name}`)

//Question 4 : write a class to calculate the uber price.

class Uber{
    constructor(km,amount=20){
        this._km=km;
        this._amount=amount;
    }
    // get amount(){
    //     return this._amount;
    // }
    // set km(km){
    //     this._km=km;
    // }
    get Amount(){
        return this._km*this._amount;
    }
}
let uber = new Uber(5,10);
let uber1 = new Uber(10);
console.log(uber.Amount);
console.log(uber1.Amount);


