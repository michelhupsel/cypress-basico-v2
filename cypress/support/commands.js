Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    cy.get('#firstName').type('Michel');
    cy.get('#lastName').type('Silva');
    cy.get('#email').type('michel@teste.com');
    cy.get('#open-text-area').type('Teste');
    cy.contains('button', 'Enviar').click();
})