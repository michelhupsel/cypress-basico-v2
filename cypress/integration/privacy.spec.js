/// <reference types="Cypress" />
describe('Central de Atendimento ao Cliente TAT', function () {
    beforeEach(function () {
        cy.visit('./src/privacy.html');
    })

    Cypress._.times(5, function(){
        it('testa a página da política de privacidade de forma independente', function () {
            cy.contains('Talking About Testing')
            .should('be.visible')
        })
    })
        

    // it('testa a página da política de privacidade de forma independente', function () {
    //     cy.contains('Talking About Testing')
    //         .should('be.visible')
    // })

})