class Engineer {
    constructor(name, id, email, github) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
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
    getGit() {
        console.log(`Git: ${this.github}`)
    };
    getRole() {
        console.log(`Role: ${this.role}`);
    };
};

module.exports = Engineer;