let empty_arr = []

// add value to an arr from the back
empty_arr.push(1)
empty_arr.push(2)
empty_arr.push(67)
empty_arr.push(83)

// add value to an arr from the front
empty_arr.unshift(10)
console.table(empty_arr)

// add value to an arr from the middle
// 1. Remove item from the middle
// 2. Replace item from the middle
// 3. Add new item from the middle
empty_arr.splice(2, 1, 100)

// Delete value from the back
empty_arr.pop()

console.table(empty_arr)
console.log(empty_arr[2])

for (let index = 0; index < 4; index++) {
    empty_arr[index] += 5
    console.log(empty_arr[index])
}

console.table(empty_arr)
empty_arr[0] = 1000

console.table(empty_arr)
console.log(empty_arr[5]) // return no value = undefined

let second_arr = [100,200,300]
empty_arr = empty_arr.concat(second_arr)

// JS ES6
empty_arr.push(...second_arr)

console.table(empty_arr)
console.log(empty_arr.toString())
console.log(empty_arr.indexOf(1000))

// find()	Returns the first value of the array element that passes a given test.
// findIndex()	Returns the first index of the array element that passes a given test.

console.log(empty_arr.find(e => e %2 === 0))
console.log(empty_arr.findIndex(e => e %2 === 0))

sort_empty_arr = empty_arr.sort((a, b) => a - b) // Jika ingin menyimpan sorted array
empty_arr.toSorted((a, b) => a - b) // Jika ingin langsung memanipulasi array yang ada

console.table(empty_arr)

for (let val of empty_arr) {
    if (val % 2 === 0) {
        console.log(`current value is even = ${val}`)
    } else {
        console.log(`current value is odd ${val}`)
    }
}
console.log("------")
for (let index = 0; index < empty_arr.length; index++) {
    let val = empty_arr[index]
    if (val % 2 === 0) {
        console.log(`current value is even = ${val}`)
    } else {
        console.log(`current value is odd ${val}`)
    }
}

let some_name = "John,Titor"
some_name = some_name + "ANOTHER NAME"
console.log(some_name.length)
console.log(some_name[0])
let sub2 = some_name.substring(0 ,4)
console.log(sub2)
console.log(some_name.replace("Titor", "Doe"))
console.log(some_name.split(","))
let sub = some_name.slice(0 ,4)
console.log(sub)
console.log(some_name.toUpperCase())
console.log(some_name.toLowerCase())
console.log(some_name.trim())
console.log(some_name.includes("John"))
console.log(some_name.search("Titor"))

// let dd = Number(prompt("Day?"));
// let mm = Number(prompt("Month?"));
// let yy = Number(prompt("Year?"));
//
// let isValid = false
//
// if (yy >= 1900 && yy <= 2099) {
//     if (mm === 1 && mm === 3 && mm === 5 && mm === 7 && mm === 8 && mm === 10 && mm === 12 ) {
//         if (dd >= 1 && dd <= 31) {
//             isValid = true;
//         }
//     } else if (mm === 4 && mm === 6 && mm === 9 && mm === 11 ) {
//         if (dd >= 1 && dd <= 30) {
//             isValid = true;
//         }
//     } else if (mm === 2) {
//         if (yy%4 === 0 && yy%100 !== 0 || yy%400 === 0) {
//             if (dd >= 1 && dd <= 29) {
//                 isValid = true;
//             }
//         } else {
//             if (dd >= 1 && dd <= 28) {
//                 isValid = true;
//             }
//         }
//     }
// }
//
// let month_name = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
// ]
//
// if (isValid) {
//     console.log(`Date is valid ${dd} ${month_name[mm - 1]} ${yy}`);
// } else {
//     console.log(`Date is not valid${dd} ${mm} ${yy}`);
// }