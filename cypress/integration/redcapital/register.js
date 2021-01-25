describe('Register test case', function(){
    it('Register user', function(){
        cy.visit('https://redcapital.cl/');
        cy.get(':nth-child(6) > .v-btn__content').click();
        cy.get('.v-menu__content--fixed > .v-list > :nth-child(1) > .v-list__tile > .v-list__tile__title').click();
        cy.get('.dni-field > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').type('173222149');
        cy.get(':nth-child(2) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > input').type('123qwe');
        cy.get('[style="padding: 0rem 2rem 2rem;"] > .layout > .flex').click();
    })
})