const Manager = require("../lib/Manager");

test("Ability to set office number using constructor function", () => {
    const employee = new Manager("Jane", 1, "jane.doe@nowhere.com", "404");
    expect(employee.office).toBe('404');
  });

  test("getRole() should return Manager as a role", () => {
    const role = "Manager";
    const employee = new Manager("Jane", 1, "jane.doe@nowhere.com", "janedoe");
    expect(employee.getRole()).toBe(role);
  });