const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
// const { writeFile, copyFile } = require('./utils/generate-site');

const promptEmployee = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name', 
            message: 'Employee name: ',
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
            message: 'Employee ID: ',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter an ID!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Email address: ",
            validate: emailInput => {
              if (emailInput) {
                return true;
              } else {
                console.log('Please enter an email address!');
                return false;
              }
            }
          },
          {
            type: 'list',
            name: 'role',
            message: 'Role: (please select one)',
            default: 'Employee',
            choices: ['Manager', 'Engineer', 'Intern', 'Employee'],
           
          },
          {
              type: 'input',
              name: 'Office Number',
              message: 'Office Number: ',
              when: (answers) => answers.role === 'Manager'

          },
          {
            type: 'input',
            name: 'github',
            message: 'GitHub Username: ',
            when: (answers) => answers.role === 'Engineer'

        },
        {
            type: 'input',
            name: 'school',
            message: 'School: ',
            when: (answers) => answers.role === 'Intern'

        }
        

    ]);
};

promptEmployee();

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
