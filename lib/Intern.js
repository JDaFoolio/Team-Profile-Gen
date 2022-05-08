class Intern {
    constructor(name, id, email, school) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
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
    getSchool() {
        console.log(`Git: ${this.school}`)
    };
    getRole() {
        console.log(`Role: ${this.role}`);
    };
};

module.exports = Intern;