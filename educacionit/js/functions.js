


/**
 * Funcion estatica
 * Sin parametros, no permite ser modificada externamente
 * Devuelve siempre el mismo resultado
 */
function saludar() 
{
	return 'Hola Mundo!';
}

/**
 * Funcion dinamica
 * Recibe parametros, permite ser modificada externamente
 * Devuelve distinto resultado
 * Al recibir parametros, se modifica el resultado pero no la operacion
 */
function saludar_a_alguien(quien) 
{
	return 'Hola ' + quien + '!';
}

function saludar_segun_tipo_y_persona(saludo, quien) 
{
	return saludo + quien + '!';
}

/**
 * En este caso la funcion completa depende de los parametros recibidos
 * El utimo parametro es una definicion por defecto
 * Los parametros por defecto no son obligatorios en la llamada a la funcion
 * 
 */
function saludo_a_medida(saludo, quien, exclamacion = false) 
{
	return saludo + quien + ((exclamacion) ? '!' : '');
}

// UTILIZANDO LAS FUNCIONES

// Imprime el saludo
console.log(saludar());

// Imprime el saludo utilizando el nombre especificado
console.log(saludar_a_alguien('Alumnos'));

// Imprime el saludo utlizando el tipo de saludo y nombre especificado 
console.log(saludar_segun_tipo_y_persona('Chau', 'Alumnos'));

// Imprime signo de exclamacion, sobreescribe el valor por defecto
console.log(saludo_a_medida('Gracias', 'totales', true));

// Imprime sin signo de exclamacion, utiliza el valor por defecto
console.log(saludo_a_medida('Gracias', 'de nuevo'));

