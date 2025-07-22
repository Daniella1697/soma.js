function addIsadult(person) {
    return {
        ...person,
        Isadult: person.age >= 18
    };
}

const person1 = { name: "Maria", age: 20 };
const person2 = { name: "Marcia", age: 15 };

console.log(addIsadult(person1));
console.log(addIsadult(person2));
