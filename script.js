let data =[132,352,453,'MANSI'];
data.forEach(function(element,index){
    console.log(element)
})
data.push("Mansi")
data.forEach(function(element,index)
{
    console.log(element)
})
data.pop()
data.pop()
let person = {
    name: "Rajat",
    age: 24,
    mono: 5463782,
    college: "kiet"
}
console.log(person)
console.log(person.college)
console.log(person.name)

function car(make,model,year){
    this.make=make;
}
var mycar = new car('eagle','turn',1314145);
console .log(mycar.year)
//array implementation
for(let element in data){
    console.log(data[element])
}
//date
let myDate= new Date();
console.log(myDate.getTime());
console.log(myDate.getFullYear());
console.log(myDate.getDay());
console.log(myDate.getMinutes());
console.log(myDate.getHours());

let myLoveString="gsyrjnfkivg kg glgh hb";
console.log(myLoveString.indexOf("good"))
console.log(myLoveString.lastIndexOf("good"))
console.log(myLoveString.slice(1,4))
d=myLoveString.replace("mansi","varshney")
d= d.replace("good","bad");
console.log(d,myLoveString)

let elementClass = document.getElementsByClassName("container")
console.log(elementClass);
elementClass[0].style.background = "yellow";
