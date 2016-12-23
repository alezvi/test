
/**
 * This variable is declared in the global scope
 * 
 */
var name = 'Alexander';


/**
 * The "name" parameter is not a reference to the variable,
 * it is just the name given to the unique argument expected by the function.
 * 
 */
function sayHelloTo(name) 
{
	return 'Hello!, ' + name;
}

/**
 * The function requires a parameter
 * You can use the global variable
 */
console.log(sayHelloTo(name));

/**
 * Or you can use a string directly
 */
console.log(sayHelloTo('John'));

/**
 * Also, you can call to a function who returns a string
 */
console.log(sayHelloTo(['Alex', 'John', 'Mary'].join(', ')));

