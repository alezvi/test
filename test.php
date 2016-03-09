<?php

// Creamos un array de ejemplo
$array = [
	/**
	 * La funcion no es recursiva! por lo tanto
	 * esta clave sera convertida a 'profile'
	 */
	'Profile' => [
		/* Pero esta clave quedara igual */
		'FirstName' => 'Alex',
	],
	'ONE' => 1,
	'TWO' => 2,
];

// Por defecto cambia a minusculas
$changed = array_change_key_case($array);

// Con 'CASE_UPPER' lo cambiamos a mayusculas
$changed = array_change_key_case($array);

// Con 'CASE_LOWER' lo cambiamos a minusculas
$changed = array_change_key_case($array);

// Vemos el resultado: las claves fueron convertidas a mayusculas
var_dump($changed);

/**
 * ANULACION DE INDICES
 * Si dos indices se llaman identicos, el ultimo sobreescribira cualquiera
 * declarado anteriormente.
 */
$array = [
	'fIrST' => 'primero', // first
	'second' => 'segundo',
	'first' => 'tercero', // first <-- este sobrescribe al anterior
];

$changed = array_change_key_case($array);

var_dump($changed);
