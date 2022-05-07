//engineer constant
const Engineer = require("../library/Engineer");

describe("Engineer", () => {
    describe("getName", () => {
        it("should return the name of the parent object", () => {
            const name = "Jared"
            expect(name).toEqual(Engineer.name);
        });
    });
    
    describe("getId", () => {
        it("should return the ID number of the parent object", () => {
            const id = 2
            expect(Id).toEqual(Engineer.id);
        });
    });
    describe("getEmail", () => {
        it("should return the email address of the parent object", () => {
            const email = "longja2015@gmail.com"
            expect(email).toEqual(Engineer.email);
        });
    });
    describe("getGit", () => {
        it("should return the Github of the parent object", () => {
            const git = "JDaFoolio@github"
            expect(git).toEqual(Engineer.github);
        });
    });
    describe("getRole", () => {
        it("should return the role of the parent object", () => {
            const Role = "engineer"
            expect(Role).toEqual(Engineer.role);
        });
    });
});