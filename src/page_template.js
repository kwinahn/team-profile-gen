const createCards = (employeeData) => {
	console.log(employeeData);

	const manager = employeeData.managerArr.map(function (card) {
		let managerCard = `
    <div class="card employee-card">
      <div class="card-header">
          <h2 class="card-title">${card.name}</h2>
          <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>Manager</h3>
      </div>
      <div class="card-body">
          <ul class="list-group">
              <li class="list-group-item">ID: ${card.id}</li>
              <li class="list-group-item">Email: <a href="mailto:${card.email}">${card.email}</a></li>
              <li class="list-group-item">Office number: ${card.office}</li>
          </ul>
      </div>
    </div>
    `;

		return managerCard;
	});

	const engineer = employeeData.engineerArr.map(function (card) {
		let engineerCard = `<div class="card employee-card">
            <div class="card-header">
                <h2 class="card-title">${card.name}</h2>
                <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>Engineer</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${card.id}</li>
                    <li class="list-group-item">Email: <a href='mailto:${card.email}'>${card.email}</a></li>
                    <li class="list-group-item">GitHub: <a href="https://github.com/${card.github}" target="_blank">${card.github}</a></li>
                </ul>
            </div>
          </div>
          `;
		return engineerCard;
	});

	const intern = employeeData.internArr.map(function (card) {
		let internCard = `
          <div class="card employee-card">
            <div class="card-header">
                <h2 class="card-title">${card.name}</h2>
                <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>Intern</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${card.id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${card.email}">${card.email}</a></li>
                    <li class="list-group-item">School: ${card.school}</li>
                </ul>
            </div>
          </div>
          `;
		return internCard;
	});

 
	return [manager, engineer, intern]
  
};

module.exports = (htmlTemplate) => {
	return `
      <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <title>My Team</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
            <link rel="stylesheet" href="style.css">
            <script src="https://kit.fontawesome.com/c502137733.js"></script>
          </head>
          <body>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 jumbotron mb-3 team-heading">
                        <h1 class="text-center">My Team</h1>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="team-area col-12 d-flex justify-content-center">
                      ${createCards(htmlTemplate)}
                    </div>
                </div>
            </div>    
          </body>
          </html>    
      `;
};
