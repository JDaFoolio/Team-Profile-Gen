const Engineer = require("../lib/Engineer");

test("Can create a github.", () => {
    const testGithub = "JDaFoolio";
    const employeeInstance = new Engineer("Jared", 2, "longja2015@gmail.com", testGithub);
    expect(employeeInstance.github).toBe(testGithub);
});

test("Testing getGithub will return github.", () => {
    const testGithub = "JDaFoolio";
    const employeeInstance = new Engineer("Jared", 2, "longja2015@gmail.com", testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("Testing role.", () => {
    const returnValue = "Engineer";
    const employeeInstance = new Engineer("Jared", 2, "longja2015@gmail.com", "JDaFoolio");
    expect(employeeInstance.getRole()).toBe(returnValue);
});