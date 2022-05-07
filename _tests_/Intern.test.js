//Intern Constant 
const Intern = require("../library/Intern");
//function to get the name of intern
describe ("Intern", () => {
    describe("getName", () => {
        it("should return the name of the parent object", () => {
            const name = "Kalen"
            expect(name).toEqual(Intern.name);
        });
    });
//function to get id number for intern 
describe ("getID", () => {
    it("should return the ID number of the parent object", () => {
        const id = 0 
        expect(id).toEqual(Intern.id);
    });
});
//function to get email of intern
describe("getEmail", () => {
    it("should return the email address of the parent object", () => {
        const email = "intern@fakeexample.com"
        expect(email).toEqual(Intern.email);
    });
});
describe("getSchool", () => {
    it("should return the school of the parent object", () => {
        const school = "University of Richmond"
        expect(school).toEqual(Intern.school);
    });
});
//function to get the role of intern
describe("getRole", () => {
    it("should return the role of the parent object", () => {
        const role = "Intern"
        expect(role).toEqual(Intern.role);
    });
});

});