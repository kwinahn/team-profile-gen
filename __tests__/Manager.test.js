const Manager = require("../lib/Manager");

test("Ability to set office number using constructor function", () => {
    const officeNumber = "444";
    const employee = new Manager("Jane", 1, "jane.doe@nowhere.com", officeNumber);
    expect(employee.officeNumber).toBe(officeNumber);
  });

  test("getRole() should return Manager as a role", () => {
    const role = "Manager";
    const employee = new Manager("Jane", 1, "jane.doe@nowhere.com", "janedoe");
    expect(employee.getRole()).toBe(role);
  });