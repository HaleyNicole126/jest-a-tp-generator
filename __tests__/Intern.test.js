const Intern = require('../lib/Intern');
const Employee = require('../lib/Employee');
jest.mock('../lib/Employee');
console.log(new Employee());

test('creates an intern class', () => {
    const intern = new Intern('lqpv');

    expect(intern.school).toEqual(expect.any(String));



});

test("Get Intern's school", () => {
    const intern = new Intern('escuela');
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school));
    
});

test("gets Intern's role", () => {
    const intern = new Intern('Dave');
    expect(intern.getRole()).toEqual('Intern');
});