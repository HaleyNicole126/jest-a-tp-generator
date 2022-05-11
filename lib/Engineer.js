const Employee = require('../lib/Employee');

function Engineer(GitHub = '') {
    this.github = GitHub;

    this.role = 'Engineer';

    this.getRole = function() {
        return this.role    
    };

    this.getGithub = function() {
        return this.github    
    };
}

module.exports = Engineer;