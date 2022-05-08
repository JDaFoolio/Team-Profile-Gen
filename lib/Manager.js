class Manager {
    constructor(name, id, email, officeNumber) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
    };

    getName() {
        console.log(`Name: ${this.name}`);
    };
    getId() {
        console.log(`Id: ${this.id}`);
    };
    getEmail() {
        console.log(`Email: ${this.email}`);
    };
    getOfficeNumber() {
        console.log(`Git: ${this.officeNumber}`)
    };
    getRole() {
        console.log(`Role: ${this.role}`);
    };
};

module.exports = Manager;