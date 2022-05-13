// team.Html main body
const teamHtml = (teamMembers) =>{
  return `
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
      integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
  <script src="https://kit.fontawesome.com/1e0a13a89f.js" crossorigin="anonymous"></script>
  <link rel="stylesheet" href="stylesheet.css">
  <title>Team Profile Generator</title>
</head>
<body>
  <header>
      <div class="container-fluid">
          <div class="row ">
              <div class="col-12 jumbotron mb-3 header">
                  <h1 class="text-center">My Team</h1>
              </div>
          </div>
      </div>
  </header>
  <main>
  <div class="container">
      <div class="row">
          <div class="team col-12 d-flex justify-content-center">
             ${generateTeam(teamMembers)}
          </div>
      <div>
  </div>
  </main>
</body>
</html>
  `;
}

const generateTeam = (team) => {
  // refresh the html page to load new team
  const html = [];
  // generateManager function to import details into manager employee card
  const generateManager = manager => {
      let managerHtml = `
      <div class="row employee-card">
          <div class="col card-header">
             <h2 class="card-title">${manager.name} </h2>
             <h3 class="card-title"><i class="fas fa-mug-hot"></i>Manager</h3>
          </div>
          <div class="col card-body">
              <ul class="list-group">
                 <li class="list-group-item">ID: ${manager.id}</li>
                 <li class="list-group-item">Email: <span id="email"><a href="mailto:${manager.email}">${manager.email}</a></span></li>
                <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
             </ul>
          </div>
      </div>
      `;
      html.push(managerHtml);
  }
  //// generateEngineer function to import details into engineer employee card
  const generateEngineer = engineer => {
      let engineerHtml = `
     <div class="row employee-card">
          <div class="col card-header">
              <h2 class="card-title"> ${engineer.name} </h2>
              <h3 class="card-title"><i class="fas fa-glasses"></i>Engineer</h3>
          </div>
          <div class="col card-body">
              <ul class="list-group">
                  <li class="list-group-item">ID: ${engineer.id}</li>
                  <li class="list-group-item">Email: <span id="email"><a href="mailto:${engineer.email}">${engineer.email}</a></span></li>
                  <li class="list-group-item">Github: <a target="_blank" href="https://github.com/${engineer.github}">${engineer.github}</a></li>
              </ul>
          </div>
      </div>
      `;
      html.push(engineerHtml);
  }
  // generateIntern function to import details into intern employee card
  const generateIntern = intern => {
      let internHtml = `
      <div class="row employee-card">
          <div class="col card-header">
              <h2 class="card-title"> ${intern.name} </h2>
              <h3 class="card-title"><i class="fas fa-user-graduate"></i>Intern</h3>
          </div>
          <div class="col card-body">
              <ul class="list-group">
                  <li class="list-group-item">ID: ${intern.id}</li>
                  <li class="list-group-item">Email: <span id="email"><a href="mailto:${intern.email}">${intern.email}</a></span></li>
                  <li class="list-group-item">School: ${intern.school}</li>
              </ul>
          </div>
      </div>
      `;
      html.push(internHtml);
  }
  //create a for loop for all the employees
  for (let i = 0; i < team.length; i++) {
      if (team[i].getRole() === "Manager") {
          generateManager(team[i]);
      }
      if (team[i].getRole() === "Engineer") {
          generateEngineer(team[i]);
      }
      if (team[i].getRole() === "Intern") {
          generateIntern(team[i]);
      }
  }
 return html.join("");
}
module.exports = teamHtml;
// const teamHtml = (teamMembers) => {
//   return `
//   `

// }

//   // create the team section
//   const generateTeam = teamArr => {
//     return `
//       <section class="my-3" id="portfolio">
//         <h2 class="text-dark bg-primary p-2 display-inline-block">Work</h2>
//         <div class="flex-row justify-space-between">
//         ${projectsArr
//           .filter(({ role }) => 'Manager')
//           .map(({ name, id, email, role }) => {
//             return `
//             <div class="col-12 mb-2 bg-dark text-light p-3">
//               <h3 class="portfolio-item-title text-light">${name}</h3>
//               <h5 class="portfolio-languages">
//                 ID:
//                 ${languages.map(language => language).join(',')}
//               </h5>
//               <p>${description}</p>
//               <a href="${link}" class="btn"><i class="fab fa-github mr-2"></i>View Project on GitHub</a>
//             </div>
//           `;
//           })
//           .join('')}
  
//         ${projectsArr
//           .filter(({ feature }) => !feature)
//           .map(({ name, description, languages, link }) => {
//             console.log(languages);
//             return `
//             <div class="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
//               <h3 class="portfolio-item-title text-light">${name}</h3>
//               <h5 class="portfolio-languages">
//                 Built With:
//                 ${languages.join(', ')}
//               </h5>
//               <p>${description}</p>
//               <a href="${link}" class="btn mt-auto"><i class="fab fa-github mr-2"></i>View Project on GitHub</a>
//             </div>
//           `;
//           })
//           .join('')}
      
//         </div>
//       </section>
//     `;
//   };
  
//   // export function to generate entire page
//   module.exports = templateData => {
//     // destructure page data by section
//     const { projects, about, ...header } = templateData;
  
//     return `
//     <!DOCTYPE html>
//     <html lang="en">
    
//     <head>
//       <meta charset="UTF-8">
//       <meta name="viewport" content="width=device-width, initial-scale=1.0">
//       <meta http-equiv="X-UA-Compatible" content="ie=edge">
//       <title>Portfolio Demo</title>
//       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
//       <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
//       <link rel="stylesheet" href="style.css">
//     </head>
    
//     <body>
//       <header>
//         <div class="container flex-row justify-space-between align-center py-3">
//           <h1 class="page-title text-secondary bg-dark py-2 px-3">${header.name}</h1>
//           <nav class="flex-row">
//             <a class="ml-2 my-1 px-2 py-1 bg-secondary text-dark" href="https://github.com/${header.github}">GitHub</a>
//           </nav>
//         </div>
//       </header>
//       <main class="container my-5">
//         ${generateAbout(about)}
//         ${generateProjects(projects)}
//       </main>
//       <footer class="container text-center py-3">
//         <h3 class="text-dark">&copy;2020 by ${header.name}</h3>
//       </footer>
//     </body>
//     </html>
//     `;
//   };
  