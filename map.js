//cookies, localstorage, session storage
//cookies --small strings of data , authentication, authorization
//4kb 
document.cookie="user=Aditi"
document.cookie="id=2"
document.cookie="admin=true;max=age=-1"
console.log(document.cookie)

document.cookie="firstaname=rahul; max-age=1"
//local storage=5mb, (ram (volatile memory))
//localStorage.setItem(key, value)
//localstorage both key and value must be strings
localStorage.setItem('greetings', 'hi')
console.log(localStorage.getItem('greetings')
localStorage.removeItem('greetings', 'hi')
//delete everything
setTimeout(()=>{
    localStorage.clear()
},2000)


//interview questions
//1='1
//1==='1'

== comparing two variables, but ignores the datatype of variables
===                          , checks datatype and compares 2 values.and


//spreads operator,
expands the contents of the 
let arr=[1,2,3,4]
let arr2=[... arr,4,5]



//var=
// functional Scope
//let varibale  block scope
// const= block scope , updated and redeclared into the scope




//is an abstract concept that holds info abt the envrnmnt , where cuurent code is implemmented
//2 types , global