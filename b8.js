var kg = parseFloat (prompt("Nhap so can nang:"));
var m = parseFloat (prompt("Nhap chieu cao:"));
var bmi = kg/(m^2);
if (bmi < 18.5){
    console.log("Gầy");
}else if (bmi < 24.9 && bmi >= 18.5){
    console.log("Binh Thuong");
}else if(bmi >= 25){
    console.log("Thua can");
}else if(bmi > 25 && bmi < 29.9){
    console.log("Tien beo phi");
}else if(bmi > 30 && bmi < 34.9){
    console.log("Beo phi do I");
}else if(bmi > 35 && bmi < 39.9){
    console.log("Beo phi do II");
}else if(bmi >= 40){
    console.log("Beo phi do III");
}