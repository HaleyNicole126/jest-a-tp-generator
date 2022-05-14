const Engineer = require('../lib/Engineer');
const Employee = require('../lib/Employee');


const engineer = new Engineer('Dave', 3, 'dave@dave.com', 'davehub');

test('creates an engineer class', () => {
    
    expect(engineer.name).toBe('Dave');
    expect(engineer.id).toBe(3);
    expect(engineer.email).toBe('dave@dave.com');
    expect(engineer.github).toBe('davehub');
 
});

test("Get Engineer's name from getName() method", () => {
    expect(engineer.getName()).toEqual('Dave');
    
});

test("Get employee ID from getId() method", () => {
    expect(engineer.getId()).toBe(3);
});

test("Get email from getEmail() method", () => {
    expect(engineer.getEmail()).toBe('dave@dave.com');
    
});


test("Get Engineer's GitHub username", () => {
    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github));
    
});

test("gets Engineer's role", () => {
   expect(engineer.getRole()).toEqual('Engineer');
});