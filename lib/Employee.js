function Employee(name, email) {
    this.name = name;
    this.id = Math.floor(Math.random() * 100);
    this.email = email;
    this.role = 'Employee';
}

module.exports = Employee;