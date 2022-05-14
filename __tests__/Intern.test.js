const Intern = require('../lib/Intern');
const Employee = require('../lib/Employee');

const intern = new Intern('sam', 4, 'sam@sam.com', 'universidad')

test('creates an intern class', () => {
   

    expect(intern.name).toBe('sam');
    expect(intern.id).toBe(4);
    expect(intern.email).toBe('sam@sam.com');
    expect(intern.school).toBe('universidad');

});

test("Get Intern's name from getName() method", () => {
    expect(intern.getName()).toEqual('sam');
    
});


test("Get Intern's school", () => {

    expect(intern.getSchool()).toEqual('universidad');
    
});

test("Get employee ID from getId() method", () => {
    expect(intern.getId()).toBe(4);
});

test("Get email from getEmail() method", () => {
    expect(intern.getEmail()).toBe('sam@sam.com');
    
});

test("gets Intern's role", () => {
  
    expect(intern.getRole()).toEqual('Intern');
});






