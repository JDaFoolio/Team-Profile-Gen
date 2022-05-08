//engineer constant
const Engineer = require("../library/Engineer");

test("constructor function for github username", () => {
    const github = "JDaFoolio";
    const employee = new Engineer("Jared", 1, "longja2015@gmail.com", github);
    expect(employee.github).toBe(github);
  });

  test("returns engineer as a role", () => {
    const role = "Engineer";
    const employee = new Engineer("Jared", 1, "longja2015@gmail.com", "JDaFoolio");
    expect(employee.getRole()).toBe(role);
  });