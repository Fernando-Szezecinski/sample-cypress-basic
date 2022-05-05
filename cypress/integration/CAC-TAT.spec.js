/// <reference types="cypress" />

describe('Attendance center - CAC TAT', ()=>{

    beforeEach(function(){
        cy.visit('./src/index.html')
    })


    it('1-Verify application`s title', () => {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })

    it('2-Fills out all required fields and submits form', () => {

        const bigText = 'Lorem ipsum dolor sit amet, m. Integer venenatis vestibulum vestibulum.'

        cy.get('#firstName').type('Fernando')
        cy.get('#lastName').type('Szezecinski')
        cy.get('#email').type('szezecinski1@gmail.com')
        cy.get('#open-text-area').type(bigText, {delay:0})
        cy.get('button[type="submit"]').click()
        cy.get('.success').should('be.visible')
    })

    it('3-Displays error message when an invalid email is informed', () => {
        cy.get('#firstName').type('Fernando')
        cy.get('#lastName').type('Szezecinski')
        cy.get('#email').type('szezecinski1gmail_com')
        cy.get('#open-text-area').type('test', {delay:0})
        cy.get('button[type="submit"]').click()
        cy.get('.error').should('be.visible')
    })

    it('4-Verifying that phone number allows only numeric values', () => {
        cy.get('#phone')
            .type('whatever')
            .should('have.value','bug')      
    })

    it('5-Checking if phone number is required', () => {
        cy.get('#firstName').type('Fernando')
        cy.get('#lastName').type('Szezecinski')
        cy.get('#email').type('szezecinski1@gmail.com')
        cy.get('#phone-checkbox').check()
        cy.get('#open-text-area').type('test', {delay:0})
        cy.contains('button', 'Enviar').click()
        cy.get('.error').should('be.visible')      
    })

    it('6-Filling out field and then cleaning it', () => {
        cy.get('#firstName')
        .type('Fernando')
        .should('have.value','Fernando')
        .clear()
        .should('have.value','')
    })

    it('7-Checking if required fields message is being displayed', () => {
        cy.get('button[type="submit"]').click()
        cy.get('.error').should('be.visible')
    })

    it('8-Submitting form using Custom commands', () => {
        cy.fillMandatoryFieldsAndSubmit()
        cy.get('.success').should('be.visible')
    })

    it('9-Selecting product by its text - Youtube', () => {
        cy.get('#product')
        .select('YouTube')
        .should('have.value', 'youtube')      
    })

    it('10-Selecting product by its value - mentoria', () => {
        cy.get('#product')
        .select('mentoria')
        .should('have.value', 'mentoria')      
    })

    it('11-Selecting product by its index - blog', () => {
        cy.get('#product')
        .select(1)
        .should('have.value', 'blog')      
    })

    it('12-Choosing the value feedback among the other options', () => {
        cy.get('input[type="radio"][value="feedback"]')
            .check()
            .should('have.value','feedback')
    })

    it('13-Chosing all the values available', () => {
        cy.get('input[type="radio"]')
            .should('have.length', 3)
                .each(($radio) => {
                    cy.wrap($radio).check()
                    cy.wrap($radio).should('be.checked')
                })
    })

    it('14-Selecting both checkboxes and then unchecking the last one', () => {
        cy.get('input[type="checkbox"]')
            .check()
            .should('be.checked')
            .last().uncheck()
            .should('not.be.checked')
    })

    it('15-Uploading file from fixtures folder', () => {
        cy.get('input[type="file"]')
            .should('not.have.value')
            .selectFile('./cypress/fixtures/example.json')
            .should((input)=>{
                expect(input[0].files[0].name).to.equal('example.json')
            })
    })

    it('16-Dragging and dropping file from fixtures folder', () => {
        cy.get('input[type="file"]')
            .should('not.have.value')
            .selectFile('./cypress/fixtures/example.json', { action: 'drag-drop'})
            .should((input)=>{
                expect(input[0].files[0].name).to.equal('example.json')
            })
    })

    it('17-Using alias to upload file from fixtures folder', () => {
        cy.fixture('example.json').as('sampleFile')
        cy.get('input[type="file"]')
        .selectFile('@sampleFile')
        .should((input)=>{
            expect(input[0].files[0].name).to.equal('example.json')
        })
    })

    it('18-Checking if page contains required attribute so that content will be displayed in a different tab', ()=>{
        cy.get('#privacy a')
        .should('have.attr', 'target', '_blank')
    })

    it('19-Removing attribute target=_blank to be able to access new tab content', () => {
        cy.get('#privacy a')
            .invoke('removeAttr', 'target')
            .click()
        cy.contains('Talking About Testing')
    })

    it('20-Checking if success message vanishes after 3s', () => {

        const bigText = 'Lorem ipsum dolor sit amet, m. Integer venenatis vestibulum vestibulum.'
        //Freezing browser's clock
        cy.clock()

        cy.get('#firstName').type('Fernando')
        cy.get('#lastName').type('Szezecinski')
        cy.get('#email').type('szezecinski1@gmail.com')
        cy.get('#open-text-area').type(bigText, {delay:0})
        cy.get('button[type="submit"]').click()
        cy.get('.success').should('be.visible')

        //Advancing on time in 3 seconds
        cy.tick(3000)

        cy.get('.success').should('not.be.visible')
    })

    Cypress._.times(3, () => {
        it('21-Using loadash to run the same test 3 times', ()=>{
            cy.get('#privacy a')
            .should('have.attr', 'target', '_blank')
        })
    })

    it('22-Checking both alerts without performing all steps', () => {

        cy.get('.success')
            .should('not.be.visible')
                .invoke('show')
            .should('be.visible')
            .and('contain', 'Mensagem enviada com sucesso.')
                .invoke('hide')
            .should('not.be.visible')

        cy.get('.error')
            .should('not.be.visible')
                .invoke('show')
            .should('be.visible')
            .and('contain', 'Valide os campos obrigatórios!')
                .invoke('hide')
            .should('not.be.visible')
    })

    it('23-Filling out field using invoke + val', () => {
        const longText = Cypress._.repeat('0123456789', 10)

        cy.get('#open-text-area')
            .invoke('val', longText)
                .should('have.value', longText)
    })

    it.only('24-Submitting HTTP request via Cypress', () => {
        
        cy.request('https://www.youtube.com/')
            .should((res) => {
                const {status, statusText, body } = res

                expect(status).to.equal(200)
                expect(statusText).to.equal('OK')
                expect(body).to.include('Home')
            })
    })


})