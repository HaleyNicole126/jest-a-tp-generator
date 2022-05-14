const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');

const manager = new Manager('Kate', 5, 'kate@kate.com', 10);

test('creates a manager class', () => {

   
    expect(manager.officeNumber).toEqual(expect.any(Number));
    expect(manager.role).toEqual('Manager');

    expect(manager.name).toBe('Kate');
    expect(manager.id).toBe(5);



});

test("gets Manager's role using getRole() method", () => {

    expect(manager.getRole()).toEqual('Manager');
});

test("Get employee ID from getId() method", () => {
    expect(manager.getId()).toBe(5);
});

test("Get email from getEmail() method", () => {
    expect(manager.getEmail()).toBe('kate@kate.com');
    
});

test("Get name from getName() method", () => {
    expect(manager.getName()).toEqual('Kate');
    
});