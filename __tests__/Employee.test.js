const Employee = require('../lib/Employee');
const employee = new Employee('Greg', 123, 'greg@aol.com');

test('creates Employee class', () => {
    
  
    expect(employee.name).toBe('Greg');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('greg@aol.com');
    expect(employee.role).toBe('Employee');
  });

  test('test if we can get name from getName() method', () => {
    expect(employee.getName()).toBe('Greg');
  });
  test('test if we can get Id from getId() method', () => {
      expect(employee.getId()).toBe(123);
    });
    test('test if we can get Email from getEmail() method', () => {
      expect(employee.getEmail()).toBe('greg@aol.com');
    });
    test('test if we can get Role from getName() method', () => {
      expect(employee.getRole()).toBe('Employee');
    });