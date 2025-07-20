console.log("Lee Kiyoung");
console.log("Julien Dacre Evenus");
console.log("Isagi Yoichi");


// Container to store data => Variables (var)
var name = 'Rishid Shrestha'
var ph = 9841222
console.log(name, ph)

// Declare, Assign

var x
x = 6
console.log(x) //6
var x = 3
console.log(x) //3
//var can be re-declared and re-assigned

// Es6 (2015)(let, const)
let a = 2
console.log(a)
//let can not be re-declared but can be re-assigned

const z=5
console.log(z)
//const can not be re-declared  or re-assigned


{
    var age=9
}
console.log(age)
//var is global scope, while let and const are block scope

let firstName='Rishid'
let lastName='Shrestha'
// document.write("  <h1> Hello I am ", firstName, " ", lastName, "</h1>")

//Data Type => string, number, boolen, undefined, null, bigInt, Symbol, array/object

let aa='Oracleus'
console.log(typeof aa)
let bb=20
console.log(typeof bb)
let cc=true
console.log(typeof cc)
let dd
console.log(typeof dd)
let ee=null
console.log(typeof ee)
let ff=BigInt(21831283821831)
console.log(typeof ff)

//Symbol Unique
console.log(Symbol('admin') == Symbol('admin'))

let friends= ['ram','shyam', 'hari']
console.log(typeof friends)

//object key=>value
let family={name: 'Rishid', bigCat: 'GX', smallDog: 'XX'}
console.log(typeof family)