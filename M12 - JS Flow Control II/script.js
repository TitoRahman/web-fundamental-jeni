// LOOP - Digunakan untuk melakukan hal yang sama atau mengulang sebuah proses
// FOR LOOP - Kita mengetahui kapan program selesai memproses sesuatu

let a = ["A", "B", "C"]
for (let i = 0; i < 5; i+=1) {
    console.log(`current i is ${i}`);
}

for (let i = 5; i >=-5 ; i-=1) {
    console.log(`current i is ${i}`);
}
console.log("Program Finish");

// WHILE LOOP - Kita tidak mengetahui kapan program memproses sesuatu
// console.log(i)
let j = 0;
while (j < 5) {
    j++;
    for (let i = 0; i < 5; i++) {
        break;
    }
    if (j%2 === 0) {
        // break; // hentikan loop
        continue; // skip
    }
    console.log(j);
}


let n = prompt("Enter a n");

for (let i = 0; i < n; i++) {
    let nums = prompt("Enter numbers  ");
}
// FOREACH LOOP