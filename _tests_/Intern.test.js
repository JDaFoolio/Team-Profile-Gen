//Intern Constant 
const Intern = require("../library/Intern");
//function to get the name of intern
test("constructor function to set school", () => {
    const school = "University of Richmond";
    const employee = new Intern("Kalen", 1, "kalen@fakeemail.com", school);
    expect(employee.school).toBe(school);
  });

  test("returns intern as a role", () => {
    const role = "Intern";
    const employee = new Intern("Kalen", 1, "kalen@fakeemail.com", "kalen");
    expect(employee.getRole()).toBe(role);
  });