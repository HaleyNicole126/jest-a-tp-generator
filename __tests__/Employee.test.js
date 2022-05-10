const Employee = require('../lib/Employee');

test('creates Employee class', () => {
    const employee = new Employee('Greg', 'greg@aol.com');
  
    expect(employee.name).toBe('Greg');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('greg@aol.com');
    expect(employee.role).toBe('Employee');
  });