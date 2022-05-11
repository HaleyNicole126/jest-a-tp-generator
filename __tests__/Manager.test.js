const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');
jest.mock('../lib/Employee');
console.log(new Employee());

test('creates a manager class', () => {
    const manager = new Manager('Dave');

    expect(manager.name).toBe('Dave');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.officeNumber).toEqual(expect.any(Number));
    expect(manager.role).toEqual('Manager');


});

test("gets Manager's role", () => {
    const manager = new Manager('Dave');
    expect(manager.getRole()).toEqual('Manager');
})