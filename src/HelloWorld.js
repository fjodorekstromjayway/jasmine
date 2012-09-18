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

function sendTrueOrFalse(paramVal){
	var result = true;
	if(paramVal === 1){
		result = true;
	} else if(paramVal != 1) {
		result = false;
	}
	return result;
};

