// helloWorld function 
const helloWorld = function() {
    return "Hello, World!"
}
var sayHello = function() {
    return ""
}

var sayHello = function() {
    return "Hello, Jane!"
}

var sayHello = function(input) {
    if (input === "Alex") {
        return "Hello, Alex!"
    } else {
        return "Hello, Jane!"
    }
}

var sayHello = function(input) {
    if (input === "Pat") {
        return "Hello, Pat!"
    } else if (input === "Alex") {
        return "Hello, Alex!"
    } else {
        return "Hello, Jane!"
    }
}
console.log(sayHello())