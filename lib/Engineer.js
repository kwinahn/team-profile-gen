const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(name, id, email) {
    super (name, id, email )
    
    this.role = 'Engineer';
    this.icon = 'fas fa-briefcase';
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
      return this.email;
  }

  getRole() {
      return this.role;
  };

}


module.exports = Engineer;
