const Employee = require('../lib/Employee');

test('creates Employee class', () => {
    const employee = new Employee('Greg', 'greg@aol.com');
  
    expect(employee.name).toBe('Greg');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('greg@aol.com');
    expect(employee.role).toBe('Employee');
  });

  test("gets employee's name", () => {
      const employee = new Employee('Dave');

      expect(employee.getName()).toEqual('Dave');
  });

  test("gets employee's email", () => {
      const employee = new Employee('Fred');
      expect(employee.getEmail()).toEqual(expect.any(String));
  })