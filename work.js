let number = prompt("Birinchi raqamni kiriting: ");
let number2 = prompt("Birinchi raqamni kiriting: ");
let belgi = prompt("Belgi operatorini kiriting (+, -, *, /): ");
if (belgi === "+") {
    console.log(Number(number) + Number(number2));
} else if (belgi === "-") {
    console.log(Number(number) - Number(number2));
} else if (belgi === "*") {
    console.log(Number(number) * Number(number2));
} else if (belgi === "/") {
    console.log(number / Number(number2));
}
    else {
        console.log("Noto'g'ri amal")
    }