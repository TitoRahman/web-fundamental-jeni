// =====================================
// FUNCTIONS
// =====================================

// Function without return
function sayHello(name) {
    console.log(`Hello ${name}`);
}

// Function with return
function getName() {
    return "Budi";
}

// =====================================
// OBJECT
// =====================================

const employee = {
    nip: null,
    nama: null,
    birthYear: null,

    getAge() {
        return 2026 - this.birthYear;
    }
};

// =====================================
// ARRAY OF OBJECTS
// =====================================

const collectionEmployees = [];

// =====================================
// OBJECT MANIPULATION
// =====================================

sayHello("Dodo");

const employeeName = getName();

employee.nama = employeeName + "2";
employee.birthYear = 1992;
employee.isMarried = true;

console.log(employee.nama);
console.log(employee.getAge());
console.log(employee.isMarried);

// =====================================
// ARRAY OPERATIONS
// =====================================

collectionEmployees.push(employee);

console.table(collectionEmployees);

console.log(collectionEmployees[0].nama);

// =====================================
// OBJECT METHODS
// =====================================

const employeeKeys = Object.keys(employee);
const employeeValues = Object.values(employee);

console.table(employeeKeys);
console.table(employeeValues);

// Using for...of
console.log("===== for...of =====");

for (const key of employeeKeys) {
    console.log(`${key}: ${employee[key]}`);
}

// Using for...in
console.log("===== for...in =====");

for (const key in employee) {
    console.log(`${key}: ${employee[key]}`);
}

// =====================================
// SEARCH KEY
// =====================================

function searchKey(searchKey) {
    return employeeKeys.includes(searchKey);
}

console.log(searchKey("nama"));       // true
console.log(searchKey("address"));    // false

// Or using find()

const foundKey = employeeKeys.find(key => key === "nama");

console.log(foundKey);

// =====================================
// DOM ELEMENTS
// =====================================

const inputName = document.getElementById("inp-name");
const btn = document.getElementById("btn");
const output = document.getElementById("output");
const q = document.getElementsByClassName("q");

// =====================================
// SHOW / HIDE PASSWORD
// =====================================

function showPassword() {
    const isPassword = inputName.type === "password";

    inputName.type = isPassword ? "text" : "password";
    btn.textContent = isPassword ? "Hide" : "Show";
    btn.style.color = isPassword ? "blue" : "red";
}

// =====================================
// OUTPUT
// =====================================

function addOutput() {
    output.innerHTML += "<b>Show</b><br>";
}