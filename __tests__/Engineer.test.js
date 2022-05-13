const Engineer = require('../lib/Engineer');
const Employee = require('../lib/Employee');
jest.mock('../lib/Employee');
console.log(new Employee());

test('creates an engineer class', () => {
    const engineer = new Engineer('Dave', 'davehub');

    expect(engineer.github).toEqual(expect.any(String));



});

test("Get Engineer's GitHub username and role", () => {
    const engineer = new Engineer('Someone', 'somehub');
    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github));
    
});

test("gets Engineer's role", () => {
    const engineer = new Engineer('Dave', 'davehub');
    expect(engineer.getRole()).toEqual('Engineer');
});