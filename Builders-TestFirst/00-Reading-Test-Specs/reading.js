function hello(name){
	if(typeof name === "undefined"){
		return "Hello!";
	} else {
		return "Hello, " + name + "!";
	}
}

function add(num1, num2){
    var total = 0;
    total = num1 + num2;
    return total;
}
