# Task_01 by Serhij Pshenychnyj
Cypress

Your task is to create a site testing plan for 10 test cases. Describe it in Excel or Word.

Site https://telnyx.com
Next, implement these tests in cypress and deploy them to GitHub.

Required:
 - Launch a pipeline on Github, with report creation on the cypress dashboard.

Optional:
 - Create a different config file.

Short 5 mins video with shared screen and clear explanations of test automation framework ( what functions, patterns and commands)
The assignment must be submitted in a week. If you have any questions please ask before submission.

## Launch project
1. Clone this repository
```
git clone https://github.com/jjustgray/QA_internship
```
2. Open in terminal ./cypress-automation directory
```
cd QA_internship/task_01/cypress-automation
```
3. Install all required dependencies
```
npm install
```
4. Execute command for Cypress
```
npx cypress open
```
5. For spec 03_portal.cy.js use different config
```
npx cypress open --config-file ./cypress.staging.config.js
```
6. CTRL + C in console to close test session