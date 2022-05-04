Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    cy.get('#firstName').type('Fernando')
        cy.get('#lastName').type('Szezecinski')
        cy.get('#email').type('szezecinski1@gmail.com')
        cy.get('#open-text-area').type('Test', {delay:0})
        cy.get('button[type="submit"]').click()
})