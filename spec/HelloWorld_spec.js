describe("Hello World", function(){
	it("says hello to the world", function(){
		expect(helloWorld()).toEqual("Hello World!");
	});
});

describe("Person", function(){
	it("calls the sayHello() function", function(){
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

describe("NewFunc", function(){
	it("returns true if paramVal is 1", function(){
		var fakeFunc = new newFunc();
		spyOn(fakeFunc, 'sendTrueOrFalse');
		fakeFunc.sendTrueOrFalse(1);
		expect(fakeFunc.sendTrueOrFalse).toEqual(true);
	});

	it("returns false if paramVal is not 1", function(){
		var fakeFunc = new newFunc();
		var fakeParam = Math.floor(Math.random()*100)+1;
		spyOn(fakeFunc, 'sendTrueOrFalse');
		fakeFunc.sendTrueOrFalse(2);
		expect(fakeFunc.sendTrueOrFalse).toEqual(false);
	});

	it("is called with the correct parameter", function(){
		var fakeFunc = new newFunc();
		spyOn(fakeFunc, "sendTrueOrFalse");
		fakeFunc.sendTrueOrFalse("testaar");
		expect(fakeFunc.sendTrueOrFalse).toHaveBeenCalledWith("testaar");
		expect(fakeFunc.sendTrueOrFalse).not.toHaveBeenCalledWith("tes");
	});

	it("calls the sendTrueOrFalse method", function(){
		var fakeFunc = new newFunc();
		spyOn(fakeFunc, "sendTrueOrFalse");
		fakeFunc.sendTrueOrFalse();
		expect(fakeFunc.sendTrueOrFalse).toHaveBeenCalled();
	});

});