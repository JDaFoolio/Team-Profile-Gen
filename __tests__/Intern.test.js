const Intern = require("../lib/Intern");

test("Can create school.", () => {
    const testSchool = "University of Richmond";
    const employeeInstance = new Intern("Jared", 2, "longja2015@gmail.com", testSchool);
    expect(employeeInstance.school).toBe(testSchool);
});

test("Testing officeNumber will return office number.", () => {
    const testSchool = "University of Richmond";
    const employeeInstance = new Intern("Jared", 2, "longja2015@gmail.com", testSchool);
    expect(employeeInstance.getSchool()).toBe(testSchool);
});

test("Testing role.", () => {
    const returnValue = "Intern";
    const employeeInstance = new Intern("Jared", 2, "longja2015@gmail.com", "University of Richmond");
    expect(employeeInstance.getRole()).toBe(returnValue);
});