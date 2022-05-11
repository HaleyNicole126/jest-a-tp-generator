function Manager(name = '') {
    this.name = name;

    this.role = 'Manager';

    this.id = Math.floor(Math.random() * 100);
    this.officeNumber = Math.floor(Math.random() * 100);

    this.getRole = function() {
        return this.role    
    };
}

module.exports = Manager;