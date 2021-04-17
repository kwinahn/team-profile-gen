const Employee = require('./Employee');

class Manager extends Employee {
  constructor(name, id, email) {
    super (name, id, email )

    this.role = 'Manager';
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


module.exports = Manager;
