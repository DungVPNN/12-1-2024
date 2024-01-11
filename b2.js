var number = prompt("Nhap so");
if (isNaN(number)) {
    console.log("Khong hop le");
} else if  ((number) % 2 == 0) {
    console.log("So chan");
} else if ((number) % 3 == 0) {
    console.log("So le");
}