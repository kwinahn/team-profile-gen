
const Intern = require("../lib/Intern");

test("Ability to set school using constructor function", () => {
    const school = "Amazon Jungle";
    const employee = new Intern("Kian", 1, "kian.doe@nowhere.com", school);
    expect(employee.school).toBe(school);
  });

  test("getRole() should return Intern as a role", () => {
    const role = "Intern";
    const employee = new Intern("Kian", 1, "kian.doe@nowhere.com", "kiandoe");
    expect(employee.getRole()).toBe(role);
  });