//Employee Constant 
const Employee = require("../library/Employee");
//function to get the name of employee
describe ("Employee", () => {
    describe("getName", () => {
        it("should return the name of the parent object", () => {
            const name = "Hayley"
            expect(name).toEqual(Employee.name);
        });
    });
//function to get id number for employee 
describe ("getId", () => {
    it("should return the ID number of the parent object", () => {
        const id = 1 
        expect(id).toEqual(Employee.id);
    });
});
//function to get email of employee
describe("getEmail", () => {
    it("should return the email address of the parent object", () => {
        const email = "employee@fakeexample.com"
        expect(email).toEqual(Employee.email);
    });
});
//function to get the role of employee
describe("getRole", () => {
    it("should return the role of the parent object", () => {
        const role = "Employee"
        expect(role).toEqual(Employee.role);
    });
});

});