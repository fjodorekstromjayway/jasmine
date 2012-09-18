describe("Hello World", function(){
	it("says hello to the world", function(){
		expect(helloWorld()).toEqual("Hello World!");
	});
});

describe("Person", function(){
	it("calls the sayHello() function when calling the helloSomeone() function", function(){
		var fakePerson = new Person();
		spyOn(fakePerson, "sayHello");
		fakePerson.helloSomeone("world");
		expect(fakePerson.sayHello).toHaveBeenCalled();
	});

	it("greets the world", function(){
		var fakePerson = new Person();
		spyOn(fakePerson, "helloSomeone");
		fakePerson.helloSomeone("world");
		expect(fakePerson.helloSomeone).toHaveBeenCalledWith("world");
	});
});

describe("sendTrueOrFalse", function(){
	it("returns only true if paramVal is 1", function(){
		expect(sendTrueOrFalse(1)).toEqual(true);
		expect(sendTrueOrFalse(1)).not.toEqual(false);
	});
	it("returns false if paramVal is 0", function(){
		expect(sendTrueOrFalse(0)).toEqual(false);
		expect(sendTrueOrFalse(0)).not.toEqual(true);
	});
	it("returns false if paramVal is kalleStropp", function(){
		expect(sendTrueOrFalse("kalleStropp")).toEqual(false);
		expect(sendTrueOrFalse("kalleStropp")).not.toEqual(true);
	});

});