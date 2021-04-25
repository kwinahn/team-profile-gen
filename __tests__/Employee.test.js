const Employee = require('../lib/Employee');

test("Ability to set name using constructor function", () => {
  const name = "Aya Aya";
  const employee = new Employee(name);
  expect(employee.name).toBe(name);
});

test("Ability to set the user ID using constructor function", () => {
  const id = "1";
  const employee = new Employee("Aya Aya", id, "ayaaya@aya.com");
  expect(employee.id).toBe(id);
});

test("Running getEmail() should return the supplied email", () => {
  const email = "ayaaya@aya.com";
  const employee = new Employee("Aya Aya", 1, email);
  expect(employee.getEmail()).toBe(email);
});

test("Running getRole() should return 'Employee'", () => {
  const role = "Employee";
  const employee = new Employee("Aya Aya", 1, "ayaaya@aya.com");
  expect(employee.getRole()).toBe(role);
});