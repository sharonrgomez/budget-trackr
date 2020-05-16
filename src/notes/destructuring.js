// ======================
//  Object Destructuring
// ======================


const person = {
    name: "Sharon",
    age: 25,
    location: {
        state: "NY",
        city: "White Plains"
    }
};

const { name: firstName = "Anonymous", age = "unknown" } = person;
console.log(`${firstName} is ${age} years old.`);

const { city, state } = person.location;

if (city && state) {
    console.log(`${firstName} is from ${city}, ${state}.`);
}

const book = {
    title: "Ego is the Enemy",
    author: "Ryan Holiday",
    publisher: {
        name: "Penguin"
    }
};

const { name: publisherName = "self published" } = book.publisher;
console.log(publisherName);


// =======================
//   Array Descructuring
// =======================


const address = ["19 Old Mamaroneck", "White Plains", "New York", 10605];
const [street, myCity = "some city", myState, zip] = address; // if we didn't need to use street and zip, const [, myCity, myState] = address
console.log(`You are in ${myCity}, ${myState}`);

const item = ["Coffee (hot)", "2.00", "$2.50", "3.00"];

const [drink, , mdPrice] = item;

console.log(`A medium ${drink} costs ${mdPrice}`);


// =============================================
//   Desctructuring Args Passed into Functions
// =============================================


const add = (data) => {
    return data.a + data.b;
};

console.log(add({ a: 1, b: 12 }));


const plus = ({ a, b }, c) => {
    return a + b + c;
}

console.log(plus({ a: 12, b: 3}, 3));