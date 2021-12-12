// 12.12.2021 

for (;;) {
	// mini calculator

	let a = Number (prompt(" Введите первое число: "));
	let b = Number (prompt(" Введите второе число: "));
	let c = prompt(" Введите выражение для операции: - + * / ");

	// container 

	let res = (0)

	//logick calculator

	if (c == "+") {
		res = (a + b);
		alert (res);
	} else if (c == "-") {
		res = (a - b);
		alert (res);
	} else if (c == "*") {
		res = (a * b);
		alert (res);
	} else if (c == "/") {
		res = (a / b);
		alert (res);
	}

}
