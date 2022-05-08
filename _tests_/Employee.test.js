//Employee Constant 
const Employee = require("../library/Employee");
//function to get the name of employee
test("constructor factor to set name", () => {
    const name = "Hayley";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
  });

test("Constructor function set for id", () => {
    const id = "1";
    const employee = new Employee("Hayley", id, "hayley@fakeemail.com");
    expect(employee.id).toBe(id);
  });

test("returns email input", () => {
    const email = "hayley@fakeemail.com";
    const employee = new Employee("Hayley", 1, email);
    expect(employee.getEmail()).toBe(email);
  });

test("get role for employee'", () => {
    const role = "Employee";
    const employee = new Employee("Hayley", 1, "hayley@fakeemail.com");
    expect(employee.getRole()).toBe(role);
  });