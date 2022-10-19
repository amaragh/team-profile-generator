const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

const generateEmployees = (employeesArr) => {

    // get array of Engineers
    const engineers = employeesArr.filter(employee => {
        if (employee.addOrExit === 'Add Engineer') {
            return true;
        } else {
            return false;
        }
    });

    // get array of Interns
    const interns = employeesArr.filter(employee => {
        if (employee.addOrExit === 'Add Intern') {
            return true;
        } else {
            return false;
        }
    });

    const engineersHtmlArr = engineers.map((eng) => {
        const engineer = new Engineer(eng.empName, eng.empId, eng.empEmail, eng.github);

        return `
            <div class="card col-lg-3 col-md-5 col-sm-12">
                <div class="emp-header">
                    <h3 class="card-title">${engineer.getName()}</h3>
                    <h4 class="card-subtitle">${engineer.getRole()}  <span class="fa fa-wrench"></span></h4>
                </div>
                <ul>
                    <li>ID: ${engineer.getId()}</li>
                    <li>Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                    <li>GitHub: <a href="${engineer.getGithub()}" target="_blank">${engineer.github}</a></li>
                </ul>
            </div>
        `;
    });

    const internsHtmlArr = interns.map((int) => {
        const intern = new Intern(int.empName, int.empId, int.empEmail, int.github);

        return `
            <div class="card col-lg-3 col-md-5 col-sm-12">
                <div class="emp-header">
                    <h3 class="card-title">${intern.getName()}</h3>
                    <h4 class="card-subtitle">${intern.getRole()}</h4>
                </div>
                <ul>
                    <li>ID: ${intern.getId()}</li>
                    <li>Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                    <li>School: ${intern.getSchool()}</li>
                </ul>
            </div>
        `;
    });

    return `
    <div class="row">
    ${engineersHtmlArr.join('')}
    ${internsHtmlArr.join('')}
    </div>
    `;
}

function generateHtml(data) {

    const manager = new Manager(data.mgrName, data.mgrId, data.mgrEmail, data.officeNum);

    return `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Test Team Page</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link rel="stylesheet" href="design.css">
</head>

<body>
    <header>
        <h1>My Team</h1>
    </header>

    <main>
        <div class="container d-flex justify-content-around flex-wrap">
            <div class="row">
                <div class="card col-12">
                    <div class="emp-header">
                        <h3 class="card-title">${manager.getName()}</h3>
                        <h4 class="card-subtitle">${manager.getRole()}</h4>
                    </div>
                    <ul>
                        <li>ID: ${manager.getId()}</li>
                        <li>Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                        <li>Office Number: ${manager.officeNumber}</li>
                    </ul>
                </div>
            </div>
             ${generateEmployees(data.employees)}
        </div>
    </main>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.min.js"></script>

</body>

</html>
`;
}

module.exports = generateHtml;