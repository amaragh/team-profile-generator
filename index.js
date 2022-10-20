const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./src/page-template')

const promptManager = () => {

    console.log(`
    ============================
       Welcome, Team Manager!
     (all prompts are required)
    ============================
    `);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'mgrName',
            message: 'What is your name?',
            validate: mgrNameInput => {
                if (mgrNameInput) {
                    return true
                } else {
                    console.log("Please enter your name!");
                    return false;
                }
            }
        }, {
            type: 'input',
            name: 'mgrId',
            message: 'What is your Employee ID?',
            validate: mgrIdInput => {
                if (mgrIdInput) {
                    return true
                } else {
                    console.log("Please enter your Employee ID!");
                    return false;
                }
            }
        }, {
            type: 'input',
            name: 'mgrEmail',
            message: 'What is your email address?',
            validate: mgrEmailInput => {
                if (mgrEmailInput) {
                    return true
                } else {
                    console.log("Please enter your email address!");
                    return false;
                }
            }
        }, {
            type: 'input',
            name: 'officeNum',
            message: 'What is your office number?',
            validate: officeNumInput => {
                if (officeNumInput) {
                    return true
                } else {
                    console.log("Please enter your office number!");
                    return false;
                }
            }
        }

    ])
};

const promptEmployee = staffingData => {



    if (!staffingData.employees) {
        staffingData.employees = [];
    };

    return inquirer.prompt([
        {
            type: 'list',
            name: 'addOrExit',
            message: 'Would you like to add an employee or finish building your team?',
            choices: ['Add Engineer', 'Add Intern', 'Finish building team']
        }
        ,
        {
            type: 'input',
            name: 'empName',
            message: "What is the employee's name?",
            when: (answers) => {
                return answers.addOrExit !== 'Finish building team';
            }
        },
        {
            type: 'input',
            name: 'empId',
            message: "What is the employee's ID?",
            when: (answers) => {
                return answers.addOrExit !== 'Finish building team';
            }
        },
        {
            type: 'input',
            name: 'empEmail',
            message: "What is the employee's email address?",
            when: (answers) => {
                return answers.addOrExit !== 'Finish building team';
            }

        },
        {
            type: 'input',
            name: 'github',
            message: "What is the employee's GitHub username?",
            when: (answers) => {
                return answers.addOrExit === 'Add Engineer';
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "What is the name of the Intern's school?",
            when: (answers) => {
                return answers.addOrExit === 'Add Intern';
            }
        }
    ]).then(empData => {
        staffingData.employees.push(empData);
        if (empData.addOrExit !== 'Finish building team') {
            return promptEmployee(staffingData);
        } else {
            return staffingData;
        }
    })

};

// TODO: Create a function to write HTML file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(`./dist/${fileName}`, data, err => {
            if (err) {
                reject(err);
                return;
            }

        })
    })
}

promptManager()
    .then(promptEmployee)
    .then(responseData => {
        return generatePage(responseData);
    })
    .then(writeHtmlFile => {
        console.log("Your HTML file has been created")

        return writeToFile('page.html', writeHtmlFile)
    })
    .catch(err => {
        console.log(err);
    });
