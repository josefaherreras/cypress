describe('formas de encontrar un elemento', function(){
    it('buscar en el buscador', function(){
        cy.visit('http://automationpractice.com/index.php');
        cy.get('.search_query.form-control.ac_input').type('hola');// acá buscamos por clase 
        cy.get('#search_query_top').type('como te va');// acá buscamos por id
        cy.get('[name="search_query"]').type('que bueno'); // acá buscamos por otra propiedad
        cy.get('[placeholder="Search"]').clear();// borra lo que está en el elemento
    })
})