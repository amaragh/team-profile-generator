const Manager = require("../lib/Manager");



function generateHtml(data) {

    const manager = new Manager(data.mgrName, data.mgrId, data.mgrEmail, data.officeNum);
    console.log("HTML", manager);

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
                    <h3 class="card-title">${manager.getName()}</h3>
                    <h4 class="card-subtitle">Manager</h4>
                    <ul>
                        <li>An item</li>
                        <li>A second item</li>
                        <li>A third item</li>
                    </ul>
                </div>
            </div>

            <div class="row">

                <div class="card col-lg-3 col-md-5 col-sm-12">

                    <h3 class="card-title">Fred</h3>
                    <h4 class="card-subtitle">Engineer</h4>
                    <ul>
                        <li>An item</li>
                        <li>A second item</li>
                        <li>A third item</li>
                    </ul>
                </div>
                <div class="card  col-lg-3 col-md-5 col-sm-12">

                    <h3 class="card-title">Mike</h3>
                    <h4 class="card-subtitle">Intern</h4>
                    <ul>
                        <li>An item</li>
                        <li>A second item</li>
                        <li>A third item</li>
                    </ul>
                </div>
            </div>
        </div>
    </main>


    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.min.js"></script>

</body>

</html>
`;
}

module.exports = generateHtml;