function generateHtml (roster) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="./assets/style.css" />
    <title>Employee Roster</title>
  </head>
  <body>


  </body>
  </html>
  `
}

function generateEmployeeCards (roster) {
  let cards = ' ';
  for (i = 0; i < roster.length; i++) {
    let name = roster[i].name;
    let id = roster[i].id;
    let email = roster[i].email;
    let role = roster[i].role;
    let extraInfo = roster[i][chooseProperty(role)]
    
    // if (roster[i].role === 'Manager') {
    //   extraInfo = roster[i].office;
    // } else if (roster[i].role === 'Intern') {
    //   extraInfo = roster[i].school;
    // } else {
    //   extraInfo = roster[i].github;
    // }
  
    cards += `
      //create a bootstrap card with all the info
    `
  }

  return cards
}

function chooseProperty (role) {
  if (role === 'Engineer') return 'github';
  else if (role === 'Intern') return 'school';
  else return 'office';
}

`
${chooseProperty(answers.role)}: ${extraInfo}
`