function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = { firstName: 'Wang', lastName: 'sixue' };
document.body.innerHTML = greeter(user);
