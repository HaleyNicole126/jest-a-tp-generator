function Employee(name = '', email = '') {
    this.name = name;
    this.id = Math.floor(Math.random() * 100);
    this.email = email;
    this.role = 'Employee';

    this.getName = function() {
        return this.name
    };

    this.getId = function() {
        return this.id
    };

    this.getEmail = function() {
        return this.email
    };

    this.getRole = function() {
        return this.role    
    };
}

module.exports = Employee;