const Employee = require('../lib/Employee');

function Intern(school = '') {
    this.school = school;

    this.role = 'Intern';

    this.getRole = function() {
        return this.role    
    };

    this.getSchool = function() {
        return this.school   
    };
}

module.exports = Intern;