/// <reference types="cypress"/>
describe('Go to different sections ', function(){
    it('go to women section', function(){
        cy.visit('http://automationpractice.com/index.php');
        cy.get('[class=sf-with-ul]').first().click();
    })
})