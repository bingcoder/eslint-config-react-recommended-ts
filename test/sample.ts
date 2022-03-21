function sum(a: number, b: number) {
  return a + b;
}

sum(1, 2);

interface Person {
  name: string;
  age: number;
}

function greeter(person: Person) {
  return `My name is ${person.name}. I am ${person.age} years old.`;
}

greeter({ name: "liu", age: 25 });
