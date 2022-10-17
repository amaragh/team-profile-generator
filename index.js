const inquirer = require('inquirer');

const promptManager = () => {

    console.log(`
    ============================
       Welcome, Team Manager!
     (all prompts are required)
    ============================
    `);
    return inquirer
        .prompt([
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

const promptEmployee = () => {

    return inquirer
        .prompt([{
            type: 'list',
            name: 'addOrExit',
            message: 'Would you like to add an employee or finish building your team?',
            choices: ['Add Engineer', 'Add Intern', 'Finish building team']
        }
            ,
        {
            type: 'input',
            name: 'engName',
            message: 'Engineer Name?',
            when: (answers) => {
                if (answers.addOrExit === 'Add Engineer') {
                    return true;
                } else {
                    return false;
                }
            }
        }
            ,
        {
            type: 'input',
            name: 'intName',
            message: 'Intern Name?',
            when: ( answers ) => {
                if (answers.addOrExit === 'Add Intern') {
                    return true;
                } else {
                    return false;
                }
            }
        }

        ])

};



promptManager()
    .then(promptEmployee)