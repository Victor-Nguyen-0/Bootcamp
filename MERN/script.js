const person = { 
    firstName: 'Bob', 
    lastName: 'Marley', 
    email: 'bob@marley.com', 
    password: 'sekureP@ssw0rd9', 
    username: 'barley', 
    createdAt: 1543945177623
};
const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];

// var email = person.email;
// var firstAnimal = animals[0];

const { email } = person;
const [firstAnimal] = animals;

console.log(email);

console.log(firstAnimal);






  
  