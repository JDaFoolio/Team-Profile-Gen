const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const fileDirectory = path.resolve(__dirname, "dist");
const filePath = path.join(fileDirectory, "index.html");

// Required module exports
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const renderHTML = require("./lib/generateHTML");

// Employee array
let employeesArr = [];

// Array questions for all employees
const questions = [           
    {
        type: "input",
        name: "name",
        message: "What is the name of the employee?"
    },
    {
        type: "input",
        name: "id",
        message: "What is the ID of this employee?"
    },
    {
        type: "input",
        name: "email",
        message: "What is this employee's email?"
    },
    {
        type: "list",
        name: "role",
        message: "What role is the employee?",
        choices: ["Engineer", "Intern", "Manager"]
    }
    ]

    // Manager Role questions
    managerQuestions = [
        {
            type: "input",
            name: "officeNumber",
            message: "What is the manager's office number?",
            validate: officeNumber => {
                if (officeNumber) {
                  return true;
                } else {
                  console.log("Please the office number:");
                  return false;
                }
              }
        }
    ]

    // Engineer role questions
    engineerQuestions = [
        {
            type: "input",
            name: "github",
            message: "What is the engineer's Github Username?",
            validate: github => {
                if (github) {
                  return true;
                } else {
                  console.log("Please enter a GitHub username:");
                  return false;
                }
              }
        }
    ]

    // Intern role questions
    internQuestions = [

        {
            type: "input",
            name: "school",
            message: "What school does the intern attend?",
            validate: school => {
                if (school) {
                  return true;
                } else {
                  console.log("Please enter a school name:");
                  return false;
                }
              }
        }
    ]

    // Function to initialize the application
    const init = () => {
        if (fs.existsSync(filePath)) {
            inquirer.prompt({
                type: "confirm",
                message: "An index.html already exists in 'dist' folder. Would you like to overwrite that file?",
                name: "overwrite"
            }).then(async (response) => {
    
                let overwrite = response.overwrite;
                if (await overwrite === true) {
                    console.log("Please enter your team information:")
                    newEmployee()
                } else if (await overwrite === false) {
                    console.log("The index.html will not be overwritten. Please move the file to a different location from 'dist' folder")
                }
            })
        } else {
            console.log("Welcome to the team profile generator. Please enter your team information below:")
            newEmployee()
        }
    };   

    // Function to create new employees
    const newEmployee = async () => {
        await inquirer.prompt(questions)
          .then((response) => {
            let name = response.name;
            let id = response.id;
            let email = response.email;
            let role = response.role;
            let officeNumber;
            let github;
            let school;

            if (role === "Engineer") {
            inquirer.prompt(engineerQuestions).then((response) =>{
                github = response.github;
                let employee = new Engineer(name, id, email, github);
                employeesArr.push(employee);
                addEmployee(employeesArr);
                });
            }
            else if (role === "Manager") {
                inquirer.prompt(managerQuestions).then((response) =>{
                        officeNumber = response.officeNumber;
                        let employee = new Manager(name, id, email, officeNumber);
                        employeesArr.push(employee);
                        addEmployee(employeesArr);
                    });
                }
            else if (role === "Intern") {
                inquirer.prompt(internQuestions).then((response) =>{
                        school = response.school;
                        let employee = new Intern(name, id, email, school);
                        employeesArr.push(employee);
                        addEmployee(employeesArr);
                    });
            }

        });    
    
    };

    // FUnction that keeps asking if anymore employees are to be added
    const addEmployee = async (array) => {
       await inquirer
        .prompt({
            type: "confirm",
            name: "addEmployee",
            message: "Would you like to add an employee? (Required)"

        }).then(async (response) => {
            var createEmployee = response.addEmployee;
            if (await createEmployee === true) {
                newEmployee();
            } 
            else if (await createEmployee === false) {
            // If the dist folder doesn't exist, then the folder will be created before making index.html
            if (!fs.existsSync(fileDirectory)) {
                fs.mkdirSync(fileDirectory)
            }
            
            fs.writeFile(filePath, renderHTML(array), (err) => {
        
                if (err) {
                    return console.log(err);
                }
                
                // Success message
                console.log("Your index.html file has been created in the 'dist' folder!");
            });

        }
    })
};
    // Function call to initialize app
    init();