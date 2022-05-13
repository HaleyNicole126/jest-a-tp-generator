const Employee = require('../lib/Employee');

class Engineer extends Employee {
    constructor(name, github) {
        super(name);

        this.github = github;
        this.role = 'Engineer'
    }

    getRole() {
        return this.role
    }

    getGithub() {
        return this.github
    }
};

module.exports = Engineer;

