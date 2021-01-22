describe('Search test case', function(){
    before(function(){
        cy.log('ejecutando precondiciones a las pruebas')
    })
    after(function(){
        cy.log('ejecutando postcondiciones a las pruebas')
    })
    it('Search dresses', function(){
        cy.visit('http://automationpractice.com/index.php');
        cy.get('#search_query_top').type('dress');
        cy.get('#searchbox > .btn').click();
        cy.get('.lighter').contains('"dress"');
    })
    it('Search hats', function(){
        cy.visit('http://automationpractice.com/index.php');
        cy.get('#search_query_top').type('hat');
        cy.get('#searchbox > .btn').click();
        cy.get('.lighter').contains('"hat"');
    })
})