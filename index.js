const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');

const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const generatePage = require('./src/page-template');
const teamMembers = [];

// menu prompt 

const promptMenu = () =>{
    return inquirer.prompt([
        {
            type: 'list',
            name: "employeeList",
            message: "What would you like to do?",
            choices:['Add-Manager', 'Add-Engineer','Add-Intern', 'Finish Building Team']
        }])
        .then(userPick => {
            switch(userPick.employeeList){
                case 'Add-Manager':promptManager();
                break;
                case 'Add-Engineer': promptEngineer();
                break;
                case 'Add-Intern': promptIntern();
                break;
                default: buildTeam();
            }
        });
    };


// prompt for manager information 
const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your employee ID? (Required)',
            validate: id => {
                if (id) {
                    return true;
                } else {
                    console.log('Please enter your employee ID!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address (Required)',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('Please enter your email address!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is your office number (Required)',
            validate: officeNumber => {
                if (officeNumber) {
                    return true;
                } else {
                    console.log('Please enter your office number!');
                    return false;
                }
            }
        },
    ]).then(answers => {
        console.log(answers);
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        teamMembers.push(manager);
        promptMenu();
    })
};

// prompt for engineer info
const promptEngineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Engineer name: (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Engineer Employee ID: (Required)',
            validate: id => {
                if (id) {
                    return true;
                } else {
                    console.log('Please enter an employee ID!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Engineer email address: (Required)',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('Please enter a email address!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'GitHub Username: (Required)',
            validate: github => {
                if (github) {
                    return true;
                } else {
                    console.log('Please enter a GitHub username!');
                    return false;
                }
            }
        },
    ]).then(answers => {
        console.log(answers);
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        teamMembers.push(engineer);
        promptMenu();
    })
};


// prompt for intern info
const promptIntern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Intern name: (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Intern Employee ID: (Required)',
            validate: id => {
                if (id) {
                    return true;
                } else {
                    console.log('Please enter an employee ID!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Intern email address: (Required)',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('Please enter an email address!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'Intern school: (Required)',
            validate: school => {
                if (school) {
                    return true;
                } else {
                    console.log('Please enter a school!');
                    return false;
                }
            }
        },
    ]).then(answers => {
        console.log(answers);
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        teamMembers.push(intern);
        promptMenu();
    })
};

// generate html once 'Finish Building Team' is selected
const buildTeam = () => {
    console.log (`Finished Building Your Team`)
   fs.writeFileSync(path.join(__dirname,'/dist/team.html'), generatePage(teamMembers));
};
promptMenu();


// const Team = require('./lib/Team');

// new Team().initializeTeam();



// const promptManager = teamData => {
//     console.log(`
//     ========================
//     Add Manager Information:
//     ========================
//     `);
//  return promptEmployee()
//  .then(() => {
//      inquirer.prompt([
//     {
//         type: 'number',
//         name: 'Office Number',
//         message: 'Office Number: '
            
//      }   
//     ])
    
//  });

// };

// const promptEngineer = teamData => {
//     console.log(`
//     ========================
//     Add Engineer Information:
//     ========================
//     `);
//     return promptEmployee()
//     .then(() => {
//         inquirer.prompt([
//        {
//         type: 'input',
//         name: 'github',
//         message: 'GitHub Username: ',
               
//         }   
//        ])
       
//     });
   
//    };

//    const promptIntern= teamData => {
//     console.log(`
//     ========================
//     Add Intern Information:
//     ========================
//     `);
//     return promptEmployee()
//     .then(() => {
//         inquirer.prompt([
//        {
//         type: 'input',
//         name: 'school',
//         message: 'School: ',
               
//         }   
//        ])
       
//     });
   
//    };
   
//    const promptMenu= teamData => {
//     console.log(`
// =====
// Menu
// =====
//     `);
// return inquirer.prompt([
//        {
//         type: 'list',
//         name: 'role',
//         message: 'What would you like to do?',
//         choices: ['Add an engineer', 'Add an intern', 'Finish building my team']
               
//         }   
//        ]);
       
//     };

// promptManager()
// .then(promptMenu());



// const promptTeam = teamData => {
//     return inquirer
//     .prompt(
//     {
//         type: 'list',
//         name: 'role',
//         message: 'Additional Team Member Role: (please select one)',
//         choices: ['Engineer', 'Intern'],
//         when: ({ confirmAdd }) => confirmAdd
//      })
//      .then(promptEmployee())
//      .then(() => {
//          inquirer.prompt([
//     {
//         type: 'input',
//         name: 'github',
//         message: 'GitHub Username: ',
//         when: (answers) => answers.role === 'Engineer'

//     },
//     {
//         type: 'input',
//         name: 'school',
//         message: 'School: ',
//         when: (answers) => answers.role === 'Intern'

//     },
//     {
//         type: 'confirm',
//         name: 'confirmAdd',
//         message: 'Would you like to add another team member?',
//         default: false
//      }
//     ]);
// });
// };







//     // {
//     //   type: 'confirm',
//     //   name: 'confirmAbout',
//     //   message: 'Would you like to enter some information about yourself for an "About" section?',
//     //   default: true
//     // },
//     // {
//     //   type: 'input',
//     //   name: 'about',
//     //   message: 'Provide some information about yourself:',
//     //   when: ({ confirmAbout }) => confirmAbout
//     // }
//   ]);
// };

// const promptTeam = teamData => {
//   console.log(`
// ==================
// Add Team Members
// ==================
// `);

//   // If there's no 'projects' array property, create one
//   if (!teamData.members) {
//     teamData.members = [];
//   }
//   return inquirer
//     .prompt([
     
//       {
//         type: 'input',
//         name: 'description',
//         message: 'Provide a description of the project (Required)',
//         validate: descriptionInput => {
//           if (descriptionInput) {
//             return true;
//           } else {
//             console.log('You need to enter a project description!');
//             return false;
//           }
//         }
//       },
//       {
//         type: 'checkbox',
//         name: 'languages',
//         message: 'What did you this project with? (Check all that apply)',
//         choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
//       },
//       {
//         type: 'input',
//         name: 'link',
//         message: 'Enter the GitHub link to your project. (Required)',
//         validate: linkInput => {
//           if (linkInput) {
//             return true;
//           } else {
//             console.log('You need to enter a project GitHub link!');
//             return false;
//           }
//         }
//       },
//       {
//         type: 'confirm',
//         name: 'feature',
//         message: 'Would you like to feature this project?',
//         default: false
//       },
//       {
//         type: 'confirm',
//         name: 'confirmAddMember',
//         message: 'Would you like to add another team member?',
//         default: false
//       }
//     ])
//     .then(teamData => {
//       teamData.members.push(teamData);
//       if (teamData.confirmAddMember) {
//         return promptTeam(teamData);
//       } else {
//         return teamData;
//       }
//     });
// };

// promptManager()
//   .then(promptTeam)
//   .then(teamData => {
//     return generatePage(teamData);
//   })
//   .then(pageHTML => {
//     return writeFile(pageHTML);
//   })
//   .then(writeFileResponse => {
//     console.log(writeFileResponse);
//     return copyFile();
//   })
//   .then(copyFileResponse => {
//     console.log(copyFileResponse);
//   })
//   .catch(err => {
//     console.log(err);
//   });
