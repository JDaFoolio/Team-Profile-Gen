//manager Constant 
const Manger = require("../library/Manager");
//function to get the name of manager
describe ("Manager", () => {
    describe("getName", () => {
        it("should return the name of the parent object", () => {
            const name = "Penny"
            expect(name).toEqual(Manager.name);
        });
    });
//function to get id number for manager 
describe ("getID", () => {
    it("should return the ID number of the parent object", () => {
        const id = 4 
        expect(id).toEqual(Manager.id);
    });
});
//function to get email of manager
describe("getEmail", () => {
    it("should return the email address of the parent object", () => {
        const email = "manager@fakeexample.com"
        expect(email).toEqual(Manager.email);
    });
});
describe("getOffice", () => {
    it("should return the office number of the parent object", () => {
        const officeNumber = "1"
        expect(officeNumber).toEqual(Manager.officeNumber);
    });
});
//function to get the role of manaager
describe("getRole", () => {
    it("should return the role of the parent object", () => {
        const role = "Manager"
        expect(role).toEqual(Manager.role);
    });
});

});