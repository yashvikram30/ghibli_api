const main = document.getElementById("main");

// using fetch results in a promise, therefore we need to use in case it is fulfilled and catch in case it is rejected.
const fetchPromise = fetch('https://ghibliapi.vercel.app/people/');
console.log(fetchPromise)

fetchPromise
.then((response)=> {
    return response.json();
    // converting the response into a json results in a promise itself, therefore we need to use another then
})
.then((people) => {
    // map is used to create a new array such that it applies a function on all the elements on an existing array
    // const names = people.map(people => people.name).join("\n");
   main.innerHTML = listOfNames(people);
})

function listOfNames(people) {
    const names = people.map(person => `<li>${person.name}</li>`).join("\n");
    return `<ul>${names}</ul>`
  }
