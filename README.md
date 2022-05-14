
  
  # Jest a Team Profile Generator 

  ## Table of Contents
  - [Description](#description)
  - [Walkthrough](#walkthrough)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Technologies](#technologies)
  - [Dependencies](#dependencies)
  - [Screenshots](#screenshots)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)

  ## Description
  This application is a command-line application that accepts user input to allow managers to generate a page that display's their team's basic information, including their names, ids, emails, roles, and additional information depending on their role. Manager information includes an office number, Engineer roles include a github username, and Intern roles include a school.
  
  ## Walkthrough
  Here is a walkthrough video showing the testing suites passing, how the user invokes the application, how a user enters responses to prompts, and as well as a sample generated HTML file. 
  Link to walkthrough video: https://youtu.be/wTy_sa8-5kA

  ## Installation
  To install this project, you will need node.js and npm. Once you've cloned the repository to your local machine run `npm i` to install the Inquirer dependency. Then, run `node index.js` to invoke the application. 

  ## Usage
  To use this project, run `node index.js` in the command line from the root of the repository. Then you will see a menu with options to Add a Manager, Add an Engineer, Add an Intern, or Finish Building Team. Once you select a role, you will be prompted for information about the team member and once you are finished entering that team member's information, you will be directed back to the menu where you can add another team member or finish building your team. Once you've entered information for all your team members and select 'Finish Building Team' from the menu, an HTML page will be generated in a file located at dist/team.html.
  
  ## Technologies
  - JavaScript
  - HTML
  - CSS
  - Node.js
  - npm

  ## Dependencies
  - Inquirer
  - Jest

  ## Screenshots
  - *Invoking the application and first prompt*
  
  ![image](https://user-images.githubusercontent.com/94570754/168405059-614a438f-7190-42f1-a364-63a2b8fcc8f9.png)
  
  
  - *Sample prompts*
  
  ![image](https://user-images.githubusercontent.com/94570754/168405132-2ce7895c-1b12-461f-bc1d-1f23cca59081.png)
  

  - *Sample HTML*
  
  ![image](https://user-images.githubusercontent.com/94570754/168405212-0a6873ca-0f7f-4c42-8395-2e579a78a633.png)
  


  ## Contributing
  Contributions welcome! Please use the information found in the Questions section below to submit an issue to the GitHub repository or contact me directly if you would like to contribute. 

  ## Tests
  To run the tests use `npm run test` which will run all of the testing suites. 

  ## License 

  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) 

  [MIT License](https://opensource.org/licenses/MIT)

  ## Questions
  Please reach out with any additional questions: 
  - [GitHub](https://github.com/haleynicole126)
  - Email: haleynicole126@gmail.com
  - [Repository](https://github.com/HaleyNicole126/jest-a-tp-generator)

