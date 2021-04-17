const Employee = require('./Employee');

class Manager extends Employee {
  constructor(name, id, email, office) {
    super (name, id, email )
    this.office = office;

    this.role = 'Manager';
    this.icon = 'fas fa-briefcase';
  }

  
  getOffice() {
    return this.office;
  }
  
  getRole() {
      return this.role;
  };

}


module.exports = Manager;
