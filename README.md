# sample-cypress-basic
This project is completely based on this course: https://www.udemy.com/course/testes-automatizados-com-cypress-basico/


Course certificate: 
https://github.com/Fernando-Szezecinski/sample-cypress-basic/blob/main/cypress/fixtures/cypress-1-.pdf


What does this project contain?
1) [Cypress] This project contains a few simple examples on how to perform basic Cypress operations
3) [Continuous_integration] An example of how to trigger cypress tests via Github actions and how they are displayed when a test fails



Prerequisites / Tech stack:
- cypress ^9.5.1
- Node.js 12 or 14 and above


How do I run tests?
Currently there are 3 commands that can be used to run tests:
1) This command is used to open cypress locally: **npm run cy:open**
2) This command is used to run cypress in mobile viewport: **npm run cy:open:mobile**
3) This command is used to run cypress in headless mode: **npm test**


What is the difference between each test?
Each test contains an example on how to deal with a certain browser element/condition:

1) It contains an example on how to verify if page`s title contains expected value.
2) It contains an example on how to type texts on input fields using a custom delay as well.
3) It contains an example on how to validate negative scenarios.
4) It contains an example on how to check if a field allows only numeric values.
5) It contains an example on how to check if a certain field is required.
6) It contains an example on how to clean up text fields via cypress.
7) It contains an example on how to check required fields.
8) It contains an example on how to use cypress custom commands for submitting form info.
9) It contains an example on how to select dropdown information by its text.
10) It contains an example on how to select dropdown information by its value.
11) It contains an example on how to select dropdown information by its index.
12) It contains an example on how to deals with radio buttons.
13) It contains an example on how to perform a specific operation given multiple HTML elements.
14) It contains an example on how to check multiple checkboxes at once and then uncheck the last one.
15) It contains an example on how to upload files from a local folder.
16) It contains an example on how to drag-and-drop a file from a local folder.
17) It contains an example on how to use alias instead of long system directories.
18) It contains an example on how to check if an element contains the required attribute to trigger a new browser tab. - troubleshooting to deal with Cypress limitation.
19) It contains an example on how to access a different browser tab content. - troubleshooting to deal with cypress limitation.
20) It contains an example on how to use Cypress clock() and tick() methods to advance in time and reduce test duration.
21) It contains an example on how to lodash via Cypress
22) It contains an example on how to use invoke + show/hide to validate both alerts without having to perform all steps
23) It contains an example on how to use invoke + to fill out some text fields
24) It contains an example on how to use Cypress to submit HTTP requests