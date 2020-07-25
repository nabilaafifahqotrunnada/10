//Operator Perbandingan

//mengisi variabel dengan data numerik dan string
let a = 5, b = 10, c = "5"

//membandingkan kesamaan nilai data a dan data c
console.log("a == c -> " + (a == c));
/*membandingkan kesamaan nilai dan tipe data a dan data c
false karena mempunyai nilai sama tapi berbeda tipe data*/
console.log("a === c -> " + (a === c));
/*membandingkan ketidaksamaan nilai data a dan data c,
false karena keduanya mempunyai nilai sama*/
console.log("a != c -> " + (a != c));
/*membandingkan ketidaksamaan nilai dan tipe data a dan data c,
true karena meskipun mempunyai nilai sama, keduanya berbeda tipe data*/
console.log("a !== c -> " + (a !== c));
//membandingkan nilai data a dan b yang lebih besar
console.log("a > b -> " + (a > b));
//membandingkan nilai data a dan b yang lebih besar sama dengan
console.log("a >= b -> " + (a >= b));
//membandingkan nilai data a dan b yang lebih kecil
console.log("a < b -> " + (a < b));
//membandingkan nilai data a dan b yang lebih kecil sama dengan
console.log("a <= b -> " + (a <= b));