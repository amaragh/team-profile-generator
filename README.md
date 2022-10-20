# Team Profile Generator

## Description

Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:

- What was your motivation?
- Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
- What problem does it solve?
- What did you learn?

## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

Clone the repo, then from the command line, run `npm install` in the project's root directory to download any dependencies.

## Usage

The demo recording can be found [here](https://youtu.be/1EZn5_iB2Ps).

Navigate to project root directory and run the command `node index` to invoke the application. The application allows entry of one team manager and multiple engineers and interns. 

The below is seen once the application is invoked. 


![](./assets/images/launch-application.png)

Once the manager prompts have been answered, the below prompt will appear. After an Engineer or Intern icreated, the prompt will appear again until the user selects 'Finish building team', at which point, the application will exit, and the HTML page will be generated in the `/dist` folder.

![](./assets/images//ee-prompts.png)


A sample of a generated team page is shown below. Clicking on an email address will take to you a draft email to that email address in your machine's native email application. Clicking on the GitHub username will take you to the engineer's GitHub profile in a new tab.

![Sample rendered HTML page for a small team.](./assets/images/html-rendering.png)


## License

Please see repo for license information.

## Tests

Run `npm run test` in project's root directory.