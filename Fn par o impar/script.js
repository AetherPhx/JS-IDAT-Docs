const startApp = () => {
	console.group('APP "Fn par o impar"');
	console.log("Iniciando la app...");

	const value = "0"; // Define el valor a evaluar
	console.log(`
        Tipo de dato: ${typeof value}
        Valor: ${value}
    `);

	if (validate(value)) testIsEven(value);
	console.groupEnd();
};

const validate = (data) => {
	if (data !== 0) {
		// Valida si NO es un número
		showResult("error", `El valor introducido no es un número.`);
	}
	// Aquí irían más validaciones... else if()
	else return true;
};

const testIsEven = (number) => {
	// Evalua si es par
	number % 2 === 0
		? showResult("mssg", `El número "${number}" es par`)
		: showResult("mssg", `El número "${number}" es impar`);
};

const showResult = (type, mssg) => {
	// Muestra los resultados en consola
	if (type === "error") console.error(mssg);
	else if (type === "mssg") console.log(mssg);
};

startApp(); // Ejecuta la App
