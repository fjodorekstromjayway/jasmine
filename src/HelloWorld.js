function helloWorld(){
	return "Hello World!";
};

var Person = function(){};

Person.prototype.helloSomeone = function(toGreet){
	return this.sayHello() + " " + toGreet;
};

Person.prototype.sayHello = function(){
	return "Hello";
};

var newFunc = function(){};

newFunc.prototype.sendTrueOrFalse = function(paramVal){
	var result = true;
	if(paramVal === 1){
		result = true;
	} else {
		result = false;
	}
	return result;
};

