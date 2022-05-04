it('Accessing privacy page directly to avoid workaround due to cypress TAB limitation', () => {
    cy.visit('./src/privacy.html')
})