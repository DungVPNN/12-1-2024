var math = parseFloat(prompt("Mon toan"));
var literature = parseFloat(prompt("Mon van"));
var english = parseFloat(prompt("Tieng anh"));
var tb = (math + literature + english  ) / 3;
console.log(tb);
if (tb < 5.0 ) {
    console.log("yeu");
}else if (tb >= 5.0 && tb <= 6.4){
    console.log("Trung Binh");
}else if (tb >= 6.5 && tb <= 7.9){
    console.log("Khá");
}else if (tb >= 8.0 && tb <= 10){
    console.log("Gỏi");
}

