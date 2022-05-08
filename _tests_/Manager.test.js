//manager Constant 
const Manger = require("../library/Manager");
//function to get the name of manager
test("constructor function sets office number", () => {
    const officeNumber = "1";
    const employee = new Manager("Taylor", 1, "taylor@fakeemail.com", officeNumber);
    expect(employee.officeNumber).toBe(officeNumber);
  });

  test("sets manager as a role", () => {
    const role = "Manager";
    const employee = new Manager("Taylor", 1, "talor@fakeemail.com", "taylor");
    expect(employee.getRole()).toBe(role);
  });