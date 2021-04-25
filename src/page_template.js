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
    //put link fontawesome and bootstrap
  </head>
  <body>


  </body>
  </html>
  `
}

function generateEmployeeCards (roster) {
  let cards = '';
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
      
      <div class="card" style="width: 18rem;">
        <div class="card-header">
          <p></p>
        </div>
        <div class="card-body">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Cras justo odio</li>
            <li class="list-group-item">Dapibus ac facilisis in</li>
            <li class="list-group-item">Vestibulum at eros</li>
          </ul>
        </div>
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    `
  }

  return cards
}

function chooseProperty (role) {
  if (role === 'Engineer') return 'github';
  else if (role === 'Intern') return 'school';
  else return 'office';
}

